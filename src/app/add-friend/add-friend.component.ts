import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""

  readValue=()=>{
    let data={
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend
    }
    this.myapi.addFriend(data).subscribe((response)=>{
      console.log(response)
      alert("added Successfully")
    })
  }
  ngOnInit(): void {
  }

}
