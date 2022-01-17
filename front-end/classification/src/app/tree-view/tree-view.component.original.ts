import { NestedTreeControl } from '@angular/cdk/tree';
import { HttpClientModule } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export class OmniNode {
  children: Array<OmniNode>;
  information: object;
}

@Injectable()
export class OmniclassDatabase {

  info: Array<OmniNode>;
  val: any
  i : string;

  dataChange = new BehaviorSubject<OmniNode[]>([]);

  get data(): OmniNode[] { return this.dataChange.value; }

  constructor(private httpClient: HttpClient) {
/*     this.httpClient.get('http://localhost:8080/omti/all').subscribe(response  => {
      console.log('GET Response:', response);
        this.read_data();
      }); */

      this.httpClient.get('./assets/omniclass.json')
      .subscribe((res) => {
        this.val = res;
        this.info = this.val.omniclass.level1;
        this.initialize();
      });

  }

  read_data(){
    this.httpClient.get('./assets/omniclass.json')
    .subscribe((res) => {
      this.val = res;
      this.info = this.val.omniclass.level1;
      this.initialize();

    });
  }
  
  initialize() {

    const dataObject = this.info;
    const data = this.buildOmniclassTree(dataObject, 0);
    this.dataChange.next(data);
  
    // Notify the change.

  }

  buildOmniclassTree(obj: Array<OmniNode>, level: number): OmniNode[] {
  
    return obj.reduce<OmniNode[]>((accumulator, current ) => {
      const value = current;
      const node = new OmniNode();
      const keys = Object.keys(value);
      node.information = value[keys[0]];

      if (keys[2] !== undefined ) {
        if (typeof value === 'object') {

          node.children = this.buildOmniclassTree(value[keys[2]], level + 1);       

        } 
      }
        return accumulator.concat(node);
    }, []);
  }
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  providers: [OmniclassDatabase]

})

export class TreeViewComponent implements OnInit {

  nestedTreeControl: NestedTreeControl<OmniNode>;
  nestedDataSource: MatTreeNestedDataSource<OmniNode>;

  constructor(database: OmniclassDatabase) {
    this.nestedTreeControl = new NestedTreeControl<OmniNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);  
  }

  hasNestedChild = (_: number, nodeData: OmniNode) => nodeData.children;


  private _getChildren = (node: OmniNode) => node.children;
  ngOnInit() {}
}
