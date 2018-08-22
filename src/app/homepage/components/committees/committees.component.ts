import { CommitteeComponent } from './committee/committee.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.css']
})
export class CommitteesComponent implements OnInit {
  committees = [
    {name: 'ABCD', img: 'https://i0.wp.com/blogs.un.org/wp-content/uploads/2015/10/LOGO2.jpg', content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim placerat lorem vitae cursus. Vivamus est metus, elementum a laoreet nec, mattis ut massa. Nullam placerat elit in pretium malesuada. Aliquam lacinia mattis hendrerit. Duis ac nunc gravida, ornare tellus id, rhoncus risus. Aliquam erat volutpat. Nam a mauris ac justo pulvinar gravida. Donec ultricies neque ligula, sed tristique urna fermentum vel.

    Praesent pharetra laoreet nunc in sagittis. Donec nec molestie justo. Etiam quam orci, rutrum vel luctus nec, ornare sit amet enim. Morbi facilisis vulputate mi quis suscipit. Donec aliquam cursus diam sit amet venenatis. Aenean malesuada lorem non sem dapibus, nec malesuada ligula fermentum. Mauris interdum eros ut egestas rutrum. Suspendisse laoreet porttitor pulvinar. Fusce tempus ante magna, eget hendrerit quam gravida in. Sed iaculis leo at sapien vulputate suscipit. Cras sed ante eu sem fermentum fringilla. Maecenas tristique laoreet porttitor. Fusce sodales eros id neque rutrum fringilla.
    
    Nulla luctus quam auctor, condimentum ligula ut, iaculis tortor. Quisque vestibulum, nisi non convallis auctor, lacus felis mollis nibh, eget auctor dolor diam eget lorem. Maecenas turpis tortor, fermentum nec mattis sit amet, euismod efficitur tortor. Duis non tincidunt tortor. Mauris eros leo, lobortis vel ipsum at, viverra tincidunt turpis. Maecenas nec ornare libero. Morbi tincidunt eros ante. Morbi pellentesque ante vel neque interdum accumsan. Aliquam blandit rhoncus risus, sit amet varius tellus. Cras dapibus pellentesque turpis, vehicula ornare neque facilisis at. Vestibulum aliquet vehicula enim, a blandit lectus egestas a. Duis in enim lectus.
    
    Curabitur venenatis in felis eget vulputate. Nulla dictum neque et posuere placerat. Nulla condimentum, purus in sollicitudin tristique, metus magna hendrerit nisl, vel lacinia nunc libero nec nisl. Nunc eleifend purus fermentum blandit rutrum. Quisque vestibulum sagittis libero, vel commodo odio auctor at. Morbi in pharetra nisi. Vestibulum fringilla ligula eget nunc dignissim, non volutpat sem consequat. Praesent finibus a diam nec tempor. Morbi suscipit ligula vel libero tempor, vitae tristique tortor blandit. Aenean commodo, sem et finibus lobortis, augue dolor tempus sem, et ullamcorper lectus ante ullamcorper metus. Curabitur elementum vestibulum urna ut blandit. Suspendisse mollis felis imperdiet ipsum tristique tempor. Aenean aliquam arcu et turpis sollicitudin, quis suscipit diam rutrum.
    
    Suspendisse semper nec justo et consectetur. Morbi faucibus, felis eu mollis feugiat, justo turpis elementum nunc, vel tempor est diam eget ante. Suspendisse sollicitudin mollis lorem, eu dictum nunc ullamcorper eu. Nullam luctus pharetra rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque dignissim mollis blandit. Nunc elementum ornare vestibulum. Nullam porta nulla felis. Aliquam erat volutpat. Donec scelerisque justo ante, dapibus faucibus diam semper vitae. Cras consequat vitae massa eget dignissim. Sed id commodo lorem.`},
    {name: 'ABCD', img: 'https://i0.wp.com/blogs.un.org/wp-content/uploads/2015/10/LOGO2.jpg', content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim placerat lorem vitae cursus. Vivamus est metus, elementum a laoreet nec, mattis ut massa. Nullam placerat elit in pretium malesuada. Aliquam lacinia mattis hendrerit. Duis ac nunc gravida, ornare tellus id, rhoncus risus. Aliquam erat volutpat. Nam a mauris ac justo pulvinar gravida. Donec ultricies neque ligula, sed tristique urna fermentum vel.

    Praesent pharetra laoreet nunc in sagittis. Donec nec molestie justo. Etiam quam orci, rutrum vel luctus nec, ornare sit amet enim. Morbi facilisis vulputate mi quis suscipit. Donec aliquam cursus diam sit amet venenatis. Aenean malesuada lorem non sem dapibus, nec malesuada ligula fermentum. Mauris interdum eros ut egestas rutrum. Suspendisse laoreet porttitor pulvinar. Fusce tempus ante magna, eget hendrerit quam gravida in. Sed iaculis leo at sapien vulputate suscipit. Cras sed ante eu sem fermentum fringilla. Maecenas tristique laoreet porttitor. Fusce sodales eros id neque rutrum fringilla.
    
    Nulla luctus quam auctor, condimentum ligula ut, iaculis tortor. Quisque vestibulum, nisi non convallis auctor, lacus felis mollis nibh, eget auctor dolor diam eget lorem. Maecenas turpis tortor, fermentum nec mattis sit amet, euismod efficitur tortor. Duis non tincidunt tortor. Mauris eros leo, lobortis vel ipsum at, viverra tincidunt turpis. Maecenas nec ornare libero. Morbi tincidunt eros ante. Morbi pellentesque ante vel neque interdum accumsan. Aliquam blandit rhoncus risus, sit amet varius tellus. Cras dapibus pellentesque turpis, vehicula ornare neque facilisis at. Vestibulum aliquet vehicula enim, a blandit lectus egestas a. Duis in enim lectus.
    
    Curabitur venenatis in felis eget vulputate. Nulla dictum neque et posuere placerat. Nulla condimentum, purus in sollicitudin tristique, metus magna hendrerit nisl, vel lacinia nunc libero nec nisl. Nunc eleifend purus fermentum blandit rutrum. Quisque vestibulum sagittis libero, vel commodo odio auctor at. Morbi in pharetra nisi. Vestibulum fringilla ligula eget nunc dignissim, non volutpat sem consequat. Praesent finibus a diam nec tempor. Morbi suscipit ligula vel libero tempor, vitae tristique tortor blandit. Aenean commodo, sem et finibus lobortis, augue dolor tempus sem, et ullamcorper lectus ante ullamcorper metus. Curabitur elementum vestibulum urna ut blandit. Suspendisse mollis felis imperdiet ipsum tristique tempor. Aenean aliquam arcu et turpis sollicitudin, quis suscipit diam rutrum.
    
    Suspendisse semper nec justo et consectetur. Morbi faucibus, felis eu mollis feugiat, justo turpis elementum nunc, vel tempor est diam eget ante. Suspendisse sollicitudin mollis lorem, eu dictum nunc ullamcorper eu. Nullam luctus pharetra rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque dignissim mollis blandit. Nunc elementum ornare vestibulum. Nullam porta nulla felis. Aliquam erat volutpat. Donec scelerisque justo ante, dapibus faucibus diam semper vitae. Cras consequat vitae massa eget dignissim. Sed id commodo lorem.`},
    {name: 'ABCD', img: 'https://i0.wp.com/blogs.un.org/wp-content/uploads/2015/10/LOGO2.jpg', content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim placerat lorem vitae cursus. Vivamus est metus, elementum a laoreet nec, mattis ut massa. Nullam placerat elit in pretium malesuada. Aliquam lacinia mattis hendrerit. Duis ac nunc gravida, ornare tellus id, rhoncus risus. Aliquam erat volutpat. Nam a mauris ac justo pulvinar gravida. Donec ultricies neque ligula, sed tristique urna fermentum vel.

    Praesent pharetra laoreet nunc in sagittis. Donec nec molestie justo. Etiam quam orci, rutrum vel luctus nec, ornare sit amet enim. Morbi facilisis vulputate mi quis suscipit. Donec aliquam cursus diam sit amet venenatis. Aenean malesuada lorem non sem dapibus, nec malesuada ligula fermentum. Mauris interdum eros ut egestas rutrum. Suspendisse laoreet porttitor pulvinar. Fusce tempus ante magna, eget hendrerit quam gravida in. Sed iaculis leo at sapien vulputate suscipit. Cras sed ante eu sem fermentum fringilla. Maecenas tristique laoreet porttitor. Fusce sodales eros id neque rutrum fringilla.
    
    Nulla luctus quam auctor, condimentum ligula ut, iaculis tortor. Quisque vestibulum, nisi non convallis auctor, lacus felis mollis nibh, eget auctor dolor diam eget lorem. Maecenas turpis tortor, fermentum nec mattis sit amet, euismod efficitur tortor. Duis non tincidunt tortor. Mauris eros leo, lobortis vel ipsum at, viverra tincidunt turpis. Maecenas nec ornare libero. Morbi tincidunt eros ante. Morbi pellentesque ante vel neque interdum accumsan. Aliquam blandit rhoncus risus, sit amet varius tellus. Cras dapibus pellentesque turpis, vehicula ornare neque facilisis at. Vestibulum aliquet vehicula enim, a blandit lectus egestas a. Duis in enim lectus.
    
    Curabitur venenatis in felis eget vulputate. Nulla dictum neque et posuere placerat. Nulla condimentum, purus in sollicitudin tristique, metus magna hendrerit nisl, vel lacinia nunc libero nec nisl. Nunc eleifend purus fermentum blandit rutrum. Quisque vestibulum sagittis libero, vel commodo odio auctor at. Morbi in pharetra nisi. Vestibulum fringilla ligula eget nunc dignissim, non volutpat sem consequat. Praesent finibus a diam nec tempor. Morbi suscipit ligula vel libero tempor, vitae tristique tortor blandit. Aenean commodo, sem et finibus lobortis, augue dolor tempus sem, et ullamcorper lectus ante ullamcorper metus. Curabitur elementum vestibulum urna ut blandit. Suspendisse mollis felis imperdiet ipsum tristique tempor. Aenean aliquam arcu et turpis sollicitudin, quis suscipit diam rutrum.
    
    Suspendisse semper nec justo et consectetur. Morbi faucibus, felis eu mollis feugiat, justo turpis elementum nunc, vel tempor est diam eget ante. Suspendisse sollicitudin mollis lorem, eu dictum nunc ullamcorper eu. Nullam luctus pharetra rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque dignissim mollis blandit. Nunc elementum ornare vestibulum. Nullam porta nulla felis. Aliquam erat volutpat. Donec scelerisque justo ante, dapibus faucibus diam semper vitae. Cras consequat vitae massa eget dignissim. Sed id commodo lorem.`},
    {name: 'ABCD', img: 'https://i0.wp.com/blogs.un.org/wp-content/uploads/2015/10/LOGO2.jpg', content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim placerat lorem vitae cursus. Vivamus est metus, elementum a laoreet nec, mattis ut massa. Nullam placerat elit in pretium malesuada. Aliquam lacinia mattis hendrerit. Duis ac nunc gravida, ornare tellus id, rhoncus risus. Aliquam erat volutpat. Nam a mauris ac justo pulvinar gravida. Donec ultricies neque ligula, sed tristique urna fermentum vel.

    Praesent pharetra laoreet nunc in sagittis. Donec nec molestie justo. Etiam quam orci, rutrum vel luctus nec, ornare sit amet enim. Morbi facilisis vulputate mi quis suscipit. Donec aliquam cursus diam sit amet venenatis. Aenean malesuada lorem non sem dapibus, nec malesuada ligula fermentum. Mauris interdum eros ut egestas rutrum. Suspendisse laoreet porttitor pulvinar. Fusce tempus ante magna, eget hendrerit quam gravida in. Sed iaculis leo at sapien vulputate suscipit. Cras sed ante eu sem fermentum fringilla. Maecenas tristique laoreet porttitor. Fusce sodales eros id neque rutrum fringilla.
    
    Nulla luctus quam auctor, condimentum ligula ut, iaculis tortor. Quisque vestibulum, nisi non convallis auctor, lacus felis mollis nibh, eget auctor dolor diam eget lorem. Maecenas turpis tortor, fermentum nec mattis sit amet, euismod efficitur tortor. Duis non tincidunt tortor. Mauris eros leo, lobortis vel ipsum at, viverra tincidunt turpis. Maecenas nec ornare libero. Morbi tincidunt eros ante. Morbi pellentesque ante vel neque interdum accumsan. Aliquam blandit rhoncus risus, sit amet varius tellus. Cras dapibus pellentesque turpis, vehicula ornare neque facilisis at. Vestibulum aliquet vehicula enim, a blandit lectus egestas a. Duis in enim lectus.
    
    Curabitur venenatis in felis eget vulputate. Nulla dictum neque et posuere placerat. Nulla condimentum, purus in sollicitudin tristique, metus magna hendrerit nisl, vel lacinia nunc libero nec nisl. Nunc eleifend purus fermentum blandit rutrum. Quisque vestibulum sagittis libero, vel commodo odio auctor at. Morbi in pharetra nisi. Vestibulum fringilla ligula eget nunc dignissim, non volutpat sem consequat. Praesent finibus a diam nec tempor. Morbi suscipit ligula vel libero tempor, vitae tristique tortor blandit. Aenean commodo, sem et finibus lobortis, augue dolor tempus sem, et ullamcorper lectus ante ullamcorper metus. Curabitur elementum vestibulum urna ut blandit. Suspendisse mollis felis imperdiet ipsum tristique tempor. Aenean aliquam arcu et turpis sollicitudin, quis suscipit diam rutrum.
    
    Suspendisse semper nec justo et consectetur. Morbi faucibus, felis eu mollis feugiat, justo turpis elementum nunc, vel tempor est diam eget ante. Suspendisse sollicitudin mollis lorem, eu dictum nunc ullamcorper eu. Nullam luctus pharetra rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque dignissim mollis blandit. Nunc elementum ornare vestibulum. Nullam porta nulla felis. Aliquam erat volutpat. Donec scelerisque justo ante, dapibus faucibus diam semper vitae. Cras consequat vitae massa eget dignissim. Sed id commodo lorem.`},
    {name: 'ABCD', img: 'https://i0.wp.com/blogs.un.org/wp-content/uploads/2015/10/LOGO2.jpg', content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim placerat lorem vitae cursus. Vivamus est metus, elementum a laoreet nec, mattis ut massa. Nullam placerat elit in pretium malesuada. Aliquam lacinia mattis hendrerit. Duis ac nunc gravida, ornare tellus id, rhoncus risus. Aliquam erat volutpat. Nam a mauris ac justo pulvinar gravida. Donec ultricies neque ligula, sed tristique urna fermentum vel.

    Praesent pharetra laoreet nunc in sagittis. Donec nec molestie justo. Etiam quam orci, rutrum vel luctus nec, ornare sit amet enim. Morbi facilisis vulputate mi quis suscipit. Donec aliquam cursus diam sit amet venenatis. Aenean malesuada lorem non sem dapibus, nec malesuada ligula fermentum. Mauris interdum eros ut egestas rutrum. Suspendisse laoreet porttitor pulvinar. Fusce tempus ante magna, eget hendrerit quam gravida in. Sed iaculis leo at sapien vulputate suscipit. Cras sed ante eu sem fermentum fringilla. Maecenas tristique laoreet porttitor. Fusce sodales eros id neque rutrum fringilla.
    
    Nulla luctus quam auctor, condimentum ligula ut, iaculis tortor. Quisque vestibulum, nisi non convallis auctor, lacus felis mollis nibh, eget auctor dolor diam eget lorem. Maecenas turpis tortor, fermentum nec mattis sit amet, euismod efficitur tortor. Duis non tincidunt tortor. Mauris eros leo, lobortis vel ipsum at, viverra tincidunt turpis. Maecenas nec ornare libero. Morbi tincidunt eros ante. Morbi pellentesque ante vel neque interdum accumsan. Aliquam blandit rhoncus risus, sit amet varius tellus. Cras dapibus pellentesque turpis, vehicula ornare neque facilisis at. Vestibulum aliquet vehicula enim, a blandit lectus egestas a. Duis in enim lectus.
    
    Curabitur venenatis in felis eget vulputate. Nulla dictum neque et posuere placerat. Nulla condimentum, purus in sollicitudin tristique, metus magna hendrerit nisl, vel lacinia nunc libero nec nisl. Nunc eleifend purus fermentum blandit rutrum. Quisque vestibulum sagittis libero, vel commodo odio auctor at. Morbi in pharetra nisi. Vestibulum fringilla ligula eget nunc dignissim, non volutpat sem consequat. Praesent finibus a diam nec tempor. Morbi suscipit ligula vel libero tempor, vitae tristique tortor blandit. Aenean commodo, sem et finibus lobortis, augue dolor tempus sem, et ullamcorper lectus ante ullamcorper metus. Curabitur elementum vestibulum urna ut blandit. Suspendisse mollis felis imperdiet ipsum tristique tempor. Aenean aliquam arcu et turpis sollicitudin, quis suscipit diam rutrum.
    
    Suspendisse semper nec justo et consectetur. Morbi faucibus, felis eu mollis feugiat, justo turpis elementum nunc, vel tempor est diam eget ante. Suspendisse sollicitudin mollis lorem, eu dictum nunc ullamcorper eu. Nullam luctus pharetra rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque dignissim mollis blandit. Nunc elementum ornare vestibulum. Nullam porta nulla felis. Aliquam erat volutpat. Donec scelerisque justo ante, dapibus faucibus diam semper vitae. Cras consequat vitae massa eget dignissim. Sed id commodo lorem.`},
    {name: 'ABCD', img: 'https://i0.wp.com/blogs.un.org/wp-content/uploads/2015/10/LOGO2.jpg', content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim placerat lorem vitae cursus. Vivamus est metus, elementum a laoreet nec, mattis ut massa. Nullam placerat elit in pretium malesuada. Aliquam lacinia mattis hendrerit. Duis ac nunc gravida, ornare tellus id, rhoncus risus. Aliquam erat volutpat. Nam a mauris ac justo pulvinar gravida. Donec ultricies neque ligula, sed tristique urna fermentum vel.

    Praesent pharetra laoreet nunc in sagittis. Donec nec molestie justo. Etiam quam orci, rutrum vel luctus nec, ornare sit amet enim. Morbi facilisis vulputate mi quis suscipit. Donec aliquam cursus diam sit amet venenatis. Aenean malesuada lorem non sem dapibus, nec malesuada ligula fermentum. Mauris interdum eros ut egestas rutrum. Suspendisse laoreet porttitor pulvinar. Fusce tempus ante magna, eget hendrerit quam gravida in. Sed iaculis leo at sapien vulputate suscipit. Cras sed ante eu sem fermentum fringilla. Maecenas tristique laoreet porttitor. Fusce sodales eros id neque rutrum fringilla.
    
    Nulla luctus quam auctor, condimentum ligula ut, iaculis tortor. Quisque vestibulum, nisi non convallis auctor, lacus felis mollis nibh, eget auctor dolor diam eget lorem. Maecenas turpis tortor, fermentum nec mattis sit amet, euismod efficitur tortor. Duis non tincidunt tortor. Mauris eros leo, lobortis vel ipsum at, viverra tincidunt turpis. Maecenas nec ornare libero. Morbi tincidunt eros ante. Morbi pellentesque ante vel neque interdum accumsan. Aliquam blandit rhoncus risus, sit amet varius tellus. Cras dapibus pellentesque turpis, vehicula ornare neque facilisis at. Vestibulum aliquet vehicula enim, a blandit lectus egestas a. Duis in enim lectus.
    
    Curabitur venenatis in felis eget vulputate. Nulla dictum neque et posuere placerat. Nulla condimentum, purus in sollicitudin tristique, metus magna hendrerit nisl, vel lacinia nunc libero nec nisl. Nunc eleifend purus fermentum blandit rutrum. Quisque vestibulum sagittis libero, vel commodo odio auctor at. Morbi in pharetra nisi. Vestibulum fringilla ligula eget nunc dignissim, non volutpat sem consequat. Praesent finibus a diam nec tempor. Morbi suscipit ligula vel libero tempor, vitae tristique tortor blandit. Aenean commodo, sem et finibus lobortis, augue dolor tempus sem, et ullamcorper lectus ante ullamcorper metus. Curabitur elementum vestibulum urna ut blandit. Suspendisse mollis felis imperdiet ipsum tristique tempor. Aenean aliquam arcu et turpis sollicitudin, quis suscipit diam rutrum.
    
    Suspendisse semper nec justo et consectetur. Morbi faucibus, felis eu mollis feugiat, justo turpis elementum nunc, vel tempor est diam eget ante. Suspendisse sollicitudin mollis lorem, eu dictum nunc ullamcorper eu. Nullam luctus pharetra rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque dignissim mollis blandit. Nunc elementum ornare vestibulum. Nullam porta nulla felis. Aliquam erat volutpat. Donec scelerisque justo ante, dapibus faucibus diam semper vitae. Cras consequat vitae massa eget dignissim. Sed id commodo lorem.`},
  ];
  constructor(public dialog: MatDialog) {}

  openDialog(committee: any) {
    let dialogRef = this.dialog.open(CommitteeComponent, {
      height: '80vh',
      data: committee,
    });
    // console.log(committee)

  }

  ngOnInit() {
  }

}
