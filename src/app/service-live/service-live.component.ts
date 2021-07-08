import { Pipe,Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-service-live',
  templateUrl: './service-live.component.html',
  styleUrls: ['./service-live.component.scss']
})
export class ServiceLiveComponent implements OnInit {

 service_url = "https://api.wpbca.com/index.php/api/service-live";
res:any;
service_live:any;
embedurl:any;
img_url:any="https://api.wpbca.com/public/upload/";
  constructor(private http: Http, private httpClient: HttpClient,
    private loading: NgxSpinnerService,
    public  sanitizer: DomSanitizer

    ) { }

  ngOnInit(): void {
    
  	this.listing_menu();
  }
async listing_menu(){
  this.loading.show(); 
          var headers = new Headers();
  
   this.http.get(this.service_url)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){
      
 this.embedurl =this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.res.embeb_link);
                        
      this.service_live =this.res;
   this.loading.hide();
    //loading.dismiss();    
    }else{
    alert("Server error");
    //loading.dismiss();
    this.loading.hide();
    }
  }, (err) => {
    console.log(err);
    this.loading.hide();
    //loading.dismiss();
  });
    
  }

}
