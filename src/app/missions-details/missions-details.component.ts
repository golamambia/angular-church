import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-missions-details',
  templateUrl: './missions-details.component.html',
  styleUrls: ['./missions-details.component.scss']
})
export class MissionsDetailsComponent implements OnInit {

   appurl = "https://api.wpbca.com/index.php/api/missions-list-country";

 ghg = "https://api.wpbca.com/index.php/api/download";
res:any;
data_missions:any;
img_url="https://api.wpbca.com/public/upload/";
error:any;
headers:any;
id:any;
 private sub: any;
  constructor(private http: Http, private httpClient: HttpClient,
  	public route: ActivatedRoute,
  	private loading: NgxSpinnerService) { }

  ngOnInit(): void {
  	  	  this.sub =this.route.params.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.id=params['id'];
   // console.log(this.id);
   this.listing();
  }
});
  	
  }
async listing(){
            this.loading.show();
            const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
         headers.append('Access-Control-Allow-Credentials', 'true');
        
   this.http.get(this.appurl+'/'+this.id, {headers: headers})
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.data_missions =this.res;
   this.loading.hide();
    //loading.dismiss();    
    }else{
    alert("Server error");
    this.loading.hide();
    //loading.dismiss();
    }
  }, (err) => {
    this.loading.hide();
    //console.log(err);
    //loading.dismiss();
  });
    
  }

 async download(file: any) {
    var fileName = file;
 var res = fileName.substr(fileName.lastIndexOf('/') + 1);
  ///res = res.substr(0, res.lastIndexOf('.')); 
  //console.log(res);
                   window.open('https://api.wpbca.com/index.php/api/mission-download/'+file, '_self', '');
    }
}
