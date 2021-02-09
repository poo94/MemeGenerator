import React from 'react'
import './meme.css';
class MemeGenerator extends React.Component{
constructor(){
    super()
    this.state={
        toptext:"",
        randomimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAPVf82u_oIYjIx6zMl_pSsWWidIbY_c_1A&usqp=CAU",
        bottomtext:"",
        allMemeImages:[]

    }
    this.handleClick=this.handleClick.bind(this)
    this.changeImg=this.changeImg.bind(this)
}
callAPI(){
fetch("https://api.imgflip.com/get_memes")
.then(response=>response.json())
.then(response=>{
    const {memes}=response.data
this.setState({allMemeImages:memes})
})
}


componentDidMount(){
this.callAPI()
}

handleClick(e){

    const {name,value} = e.target
    this.setState({
        [name]:value
    })

}

changeImg(e){
e.preventDefault()

const randNum=Math.floor(Math.random()*this.state.allMemeImages.length)
const randImg=this.state.allMemeImages[randNum].url
this.setState({
    randomimg:randImg
})
}


    render(){

/*CSS Here*/

        return(
            <div className="container">
           <form onSubmit={this.changeImg}>
               <label>TopText:</label>
               <input 
               type="text" 
               name="toptext"
               placeholder="Enter TopText Here" 
               value={this.state.toptext}
               onChange={this.handleClick}
               />
               <label>BottomText:</label>
               <input 
               type="text"
               name="bottomtext"
               placeholder="Enter BottomText Here" 
               value={this.state.bottomtext}
               onChange={this.handleClick}
               />
               <button >Generate</button>
           </form>
           <br/>
          <div className="container" >
              <img src={this.state.randomimg} style={{border:"solid 2px red",height:"400px",Width:"400px",maxWidth:"400px", minWidth:"400px"}} alt="problem"/>
              </div>
              <h2 className="top-left text-style"  >{this.state.toptext}</h2>
              <h2 className="bottom-left text-style" >{this.state.bottomtext}</h2>
          </div>
            
        )
    }
}
export default MemeGenerator 