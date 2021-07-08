import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
declare var window: any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

//  appurl = "http://api.wpbca.com/index.php/api/gallery-list-view";
 appurl ="https://api.wpbca.com/index.php/api/gallery-list-view";
res:any;
data_list:any;
// img_url="http://api.wpbca.com/public/upload/";
img_url = "https://api.wpbca.com/public/upload/";
  constructor(private http: Http, private httpClient: HttpClient,private loading: NgxSpinnerService) { }

  ngOnInit(): void {
    
  	this.listing();
  }
async listing(){
            this.loading.show();
            var data={
              'id':1
            };
   this.http.get(this.appurl)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.data_list =this.res;
   this.loading.hide();
    //loading.dismiss();  
    }else{
    alert("Server error");
    this.loading.hide();
    //loading.dismiss();
    }
  }, (err) => {
    this.loading.hide();
    console.log(err);
    //loading.dismiss();
  });
    
  }

}
