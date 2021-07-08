import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-statement-of-faith',
  templateUrl: './statement-of-faith.component.html',
  styleUrls: ['./statement-of-faith.component.scss']
})
export class StatementOfFaithComponent implements OnInit {
app_url = "https://api.wpbca.com/index.php/api/statement-of-faith";
res:any;

info_data:any;

img_url="https://api.wpbca.com/public/upload/";
 constructor(private http: Http, private httpClient: HttpClient,private loading: NgxSpinnerService) { }

  ngOnInit(): void {
  	 this.getData();
  }

   async getData(){
            this.loading.show();
   this.http.get(this.app_url)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){
         this.loading.hide();

this.info_data=this.res;
 
 // if(this.slider_data){

 //   setTimeout(()=>{
 //      this.loadSlider();
 //   },300)
  
 // }
   
    //loading.dismiss();    
    }else{
    alert("Server error");
    //loading.dismiss();
      this.loading.hide();
    }
  }, (err) => {
      this.loading.hide();
    console.log(err);
    //loading.dismiss();
  });
    
  }


}
