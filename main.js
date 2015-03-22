
//CommentList Component

var CommentList = React.createClass({
	getInitialState:function(){
    //setting initiall values
    //attach the scroll event listener to our scroll handler function
		window.addEventListener("scroll", this.handleScroll);
		return{
			comments:[], //comment array initially we have zero comment
			page:0,      //for pagination
			loadingFlag:false,   //to avoid multiple fetch request if user is keep scrolling
			url:"loadComment.php"  //url to fetch comments in json format
		}

	},

	getComment:function(){
    //method to fetch comments will concat result to state.comment
		var nextPage = this.state.page+1; //increase the page count
	 $.get(this.state.url+"?page="+this.state.page, function(result) {
      if (this.isMounted()) {
        this.setState({
          comments: this.state.comments.concat(result),  //concating to existing comments
          loadingFlag:false,
          page:nextPage
        });
      }
    }.bind(this));
	},
	componentDidMount: function(){
      //to load comments initially
   		this.getComment();
  	},
  	handleScroll:function(e){
    //this function will be triggered if user scrolls
    var windowHeight = $(window).height();
    var inHeight = window.innerHeight;
    var scrollT = $(window).scrollTop();
    var totalScrolled = scrollT+inHeight;
    if(totalScrolled+100>windowHeight){  //user reached at bottom
      if(!this.state.loadingFlag){  //to avoid multiple request 
          this.setState({
            loadingFlag:true,  
          });
          this.getComment();
      }
    }
  	},
  	render:function(){
      //creating comment node
       var CommentNode = this.state.comments.map(function (comment) {
          return (
            <div>
        Comment:{comment.content}<br/>
        Auther:{comment.auther}<hr />
        </div>
              );
        });
      return (
      <div> {CommentNode} </div>
        );
    }


});


React.render(
  <CommentList  />,
  document.getElementById('component')
);