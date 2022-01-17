import { Component, Injectable, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router, NavigationExtras } from "@angular/router";
import { Data } from '../services/data.service';
import { DataService } from '../services/data-service.service';



export class OmniNode {
  level: number;
  children_codes: Array<string>;
  children: Array<OmniNode>;
  information: any;


  constructor(){
    this.children_codes = [];
  }
}

interface ExampleFlatNode {
  children_codes: Array<string>;
  expandable: boolean;
  name: any;
  level: number;
}


@Injectable()
export class OmniclassDatabase {

  info: Array<OmniNode>;
  val: any
  i : string;

  dataChange = new BehaviorSubject<OmniNode[]>([]);

  get data(): OmniNode[] { return this.dataChange.value; }

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:8080/omti/hey').subscribe(response  => {
      console.log('GET Response:', response);
      }); 
      this.read_data();

    }

  read_data(){
    this.httpClient.get('./assets/omniclass.json')
    .subscribe((res) => {
      this.val = res;
      this.info = [this.val.omniclass];
      const data = this.buildOmniclassTree(this.info, 0);
      this.dataChange.next(data);
    });
  }

  get_children_codes(children: any, node: OmniNode){
    if( children !== undefined ) 
    {
         children.forEach(element => {
         node.children_codes.push(element.information.number);
         this.get_children_codes(element.children, node);
      });  
    }
  }

  buildOmniclassTree(obj: Array<OmniNode>, level: number): OmniNode[] {

    return obj.reduce<OmniNode[]>((accumulator, current ) => {

      const value = current;
      const node = new OmniNode();
      const keys = Object.keys(value);
      node.information = value[keys[0]];
      node.level = level;

      if (keys[2] !== undefined) {
        if (typeof value === 'object') {
          node.children = this.buildOmniclassTree(value[keys[2]], level + 1); 
          //parents.push(node.information.number);

        } 
      }
      else if( keys[1] != 'extraAttributes'){
        node.information = {number: '*',title: 'Omniclass/table23'};
        node.children = this.buildOmniclassTree(value[keys[1]], level + 1);
        //parents.push(node.information.number);
        }
        
        let children = node.children;   
        this.get_children_codes(children, node)

        return accumulator.concat(node);
      }, []);
  }

/*   buildOmniclassTree(obj: Array<OmniNode>, level: number): OmniNode[] {
  
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
  } */
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  providers: [OmniclassDatabase]

})

export class TreeViewComponent implements OnInit {

  @ViewChild('tree') tree

  expand_pers(){
    this.tree.treeControl.expand(this.treeControl.dataNodes[0]);
  }


  @Input() code: any;  
  is_set: boolean;  
  current_children: any; 
  private _transformer = (node: OmniNode, level: number) => { 
    return {
        expandable: !!node.children && node.children.length > 0,
        name: node.information,
        level: level,
        children_codes: node.children_codes
      };
    }
  
  treeControl = new FlatTreeControl<ExampleFlatNode>( node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
  constructor(private dataService: DataService, private router: Router, private data: Data , database: OmniclassDatabase) {

    this.code = null;
    this.is_set = false;

      database.dataChange.subscribe(data =>  {
      this.dataSource.data = data;  
        if( this.code !== null && this.treeControl.dataNodes.length > 0 ){
          if( this.code === '*' ){
            this.treeControl.expand(this.treeControl.dataNodes[0]);
            return;
          }
          this.treeControl.dataNodes.filter((node) => {
            return node.children_codes.length > 0
          }).forEach( element  => {
            if ( element.children_codes.includes(this.code) ){
              this.treeControl.expand( element );
            } 
          });
        }else if( this.treeControl.dataNodes.length > 0 ){
          this.treeControl.expand(this.treeControl.dataNodes[0]);
        }

    });  
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit() {

  }

  show_products(node: any){
    let code = node.name.number;
    this.data.setData( code, code );
    this.router.navigateByUrl( '/test/' + code );
   
    /* this.dataService.getProducts(omni_code).subscribe(res =>
      {
      }); */
  }

  setChildOk(text: string, node: any) {
    node.forEach(x => {
      x.ok = (x.information.number).indexOf(text) >= 0;
     if (x.parent) this.setParentOk(text, x.parent, x.ok)
      else {
        console.log('nooooooooooooooooooooooo');
      }
      if (x.children) this.setChildOk(text, x.children);
    });
  }

  setParentOk(text, node, ok) {
    console.log("parent: ");
    console.log(node.ok);
    node.ok = ok || node.ok || (node.information.number).indexOf(text) >= 0;
    if (node.parent) this.setParentOk(text, node.parent, node.ok);
  }


  displayNode(node: any){

    if( this.code !== null ){
      if( node.name.number === this.code ){
        if( this.is_set !== true ){
          this.current_children = node.children_codes;
          this.is_set = true;
        }  
        
        return 'block';
      }
      if( this.is_set == true ){
        if( this.current_children.includes(node.name.number) ){

          return 'block';
        }
      }
      if( node.children_codes.includes(this.code) ){

        return 'block';
      }
      return 'none';

    }else{
      return 'block';
    }
    
  }

}
