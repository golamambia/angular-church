import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
service_url = "https://api.wpbca.com/index.php/api/blog-details";
res:any;
blog_data:any;
id:any;
 private sub: any;
img_url:any="https://api.wpbca.com/public/upload/";
  constructor(private http: Http, 
  	private httpClient: HttpClient,
  	 public route: ActivatedRoute,

  	) { }


  ngOnInit() {
  	  this.sub =this.route.params.subscribe(params => {
  if (params) {
    //let queryParams = params;
    this.id=params['id'];
   // console.log(this.id);
   this.get_details();
  }
});
  }

async get_details(){
          var headers = new Headers();
  
   this.http.get(this.service_url+'/'+this.id)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.blog_data =this.res;
   
    //loading.dismiss();    
    }else{
    alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  
}

}
