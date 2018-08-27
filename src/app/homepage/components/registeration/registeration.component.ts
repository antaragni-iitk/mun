import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  registers = [
    {id: 'somehting1', url: 'http://bestdelegate.com/wp-content/uploads/2010/10/Alone-at-the-Podium.jpg', name: 'Delegate', content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim placerat lorem vitae cursus. Vivamus est metus, elementum a laoreet nec, mattis ut massa. Nullam placerat elit in pretium malesuada. Aliquam lacinia mattis hendrerit. Duis ac nunc gravida, ornare tellus id, rhoncus risus. Aliquam erat volutpat. Nam a mauris ac justo pulvinar gravida. Donec ultricies neque ligula, sed tristique urna fermentum vel.

    Praesent pharetra laoreet nunc in sagittis. Donec nec molestie justo. Etiam quam orci, rutrum vel luctus nec, ornare sit amet enim. Morbi facilisis vulputate mi quis suscipit. Donec aliquam cursus diam sit amet venenatis. Aenean malesuada lorem non sem dapibus, nec malesuada ligula fermentum. Mauris interdum eros ut egestas rutrum. Suspendisse laoreet porttitor pulvinar. Fusce tempus ante magna, eget hendrerit quam gravida in. Sed iaculis leo at sapien vulputate suscipit. Cras sed ante eu sem fermentum fringilla. Maecenas tristique laoreet porttitor. Fusce sodales eros id neque rutrum fringilla.`},
    {id: 'somehting2', url: 'http://bestdelegate.com/wp-content/uploads/2013/02/843982_10151730828044741_467507316_o.jpg', name: 'Something2', content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim placerat lorem vitae cursus. Vivamus est metus, elementum a laoreet nec, mattis ut massa. Nullam placerat elit in pretium malesuada. Aliquam lacinia mattis hendrerit. Duis ac nunc gravida, ornare tellus id, rhoncus risus. Aliquam erat volutpat. Nam a mauris ac justo pulvinar gravida. Donec ultricies neque ligula, sed tristique urna fermentum vel.

    Praesent pharetra laoreet nunc in sagittis. Donec nec molestie justo. Etiam quam orci, rutrum vel luctus nec, ornare sit amet enim. Morbi facilisis vulputate mi quis suscipit. Donec aliquam cursus diam sit amet venenatis. Aenean malesuada lorem non sem dapibus, nec malesuada ligula fermentum. Mauris interdum eros ut egestas rutrum. Suspendisse laoreet porttitor pulvinar. Fusce tempus ante magna, eget hendrerit quam gravida in. Sed iaculis leo at sapien vulputate suscipit. Cras sed ante eu sem fermentum fringilla. Maecenas tristique laoreet porttitor. Fusce sodales eros id neque rutrum fringilla.`},
    {id: 'somehting3', url: 'http://leaderxpress.com/blog/wp-content/uploads/2015/10/Delegating-at-work.jpeg', name: 'Something3', content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim placerat lorem vitae cursus. Vivamus est metus, elementum a laoreet nec, mattis ut massa. Nullam placerat elit in pretium malesuada. Aliquam lacinia mattis hendrerit. Duis ac nunc gravida, ornare tellus id, rhoncus risus. Aliquam erat volutpat. Nam a mauris ac justo pulvinar gravida. Donec ultricies neque ligula, sed tristique urna fermentum vel.

    Praesent pharetra laoreet nunc in sagittis. Donec nec molestie justo. Etiam quam orci, rutrum vel luctus nec, ornare sit amet enim. Morbi facilisis vulputate mi quis suscipit. Donec aliquam cursus diam sit amet venenatis. Aenean malesuada lorem non sem dapibus, nec malesuada ligula fermentum. Mauris interdum eros ut egestas rutrum. Suspendisse laoreet porttitor pulvinar. Fusce tempus ante magna, eget hendrerit quam gravida in. Sed iaculis leo at sapien vulputate suscipit. Cras sed ante eu sem fermentum fringilla. Maecenas tristique laoreet porttitor. Fusce sodales eros id neque rutrum fringilla.`},
    
  ]

  constructor(public dialog: MatDialog) {}

  openDialog(committee: any) {
    let dialogRef = this.dialog.open(RegisterDialogComponent, {
      height: '80vh',
      data: committee,
    });
    // console.log(committee)

  }

  ngOnInit() {
  }

}
