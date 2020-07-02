import React,{Component} from 'react';
import './style3.css';
import music from './audio/1.mp3';
import {Howl,Howler} from 'howler';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const audio =[
    {sound:music,label:"music"}
]

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0,
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem=this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items,newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  increment= () =>{
    this.setState({count:this.state.count + 1});
  }
  
  soundplay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play();
  }

  RenderButtonAndSound =() =>{
    return audio.map((soundobj,index) =>{
      return(
        <button key={index} onClick={()=>this.soundplay(soundobj.sound)}>
          (soundobj.index)
        </button>
      )
    })
  }
 render(){
   Howler.volume(100)
   return(
    <div className="whole"> 
    <ul className='list'>
      <li className='item'>
        <span><FontAwesomeIcon icon={faHome} /></span>
        <a href="#" className='link'>Home</a>
        <span><FontAwesomeIcon icon={faBell} /></span>
        <a href="#" className='link'>Notification</a>
        <span><FontAwesomeIcon icon={faEnvelope} /></span>
        <a href="#" className='link'>Messages</a>
        <div className="logo">
          <img src="https://lh3.googleusercontent.com/9tLfTpdILdHDAvGrRm7GdbjWdpbWSMOa0csoQ8pUba9tLP8tq7M4Quks1xuMQAVnAxVfryiDXRzZ-KDnkPv8Sm4g_YFom1ltQHjQ6Q" no repeat/>
        </div><h1 id="tittle">Trip Gyan</h1>
        <label>
          <input type="text" placeholder="Search Tripgyan" />
          <span><FontAwesomeIcon icon={faSearch} /></span>
        </label>
        <div className="pic">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThcvJv0bBa6oLgAzWZXD4RIntSo91Q_xfG0A&usqp=CAU" width="40px" height="40px" no-repeat/>
        </div>
        <div className="post">
          <label>
            <button type="submit">Add Post</button>
          </label>
        </div>
      </li>
    </ul>
    <div className="containerwrap">
    <div className="Container" style={{width:'800px',height:'200px',margin:'10px 200px',padding:"5px",zIndex:'-1',backgroundColor:'pink',border:'2px solid #999',boxSizing:"content-box"}}>
    <form id="to-do-form" onSubmit={this.addItem}>
      
      <div className="pic1">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThcvJv0bBa6oLgAzWZXD4RIntSo91Q_xfG0A&usqp=CAU" width="60px" height="60px" no-repeat/>
      <h2>Sansa Stark</h2>
      <h3>June 17</h3>
        <input type="text" placeholder="What's happening?" 
        value={this.state.currentItem.text}
        onChange={this.handleInput}/>
        <button  type="submit">Add Post</button>

  
      </div>
      </form>
	  </div>
        
    <div className="Container1" style={{width:'800px',height:'750px',margin:'10px 200px',padding:"5px",zIndex:'-1',backgroundColor:'pink',border:'2px solid #999',boxSizing:"content-box"}}>
    <div className="pic1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThcvJv0bBa6oLgAzWZXD4RIntSo91Q_xfG0A&usqp=CAU" width="60px" height="60px" no-repeat/>
      <h2>Sansa Stark</h2>
      <h3>June 17</h3>
    </div>  
      <div className='txt'>
        <h1>"It's not enough to just own a camera. Everyone owns a camera. To be a photographer, you must understand, appreciate, and harness the power you hold!"</h1>
      </div>
      <div className="txtimg">
        <img src="https://i.pinimg.com/originals/dc/e7/91/dce7915ba0c362c24426eccd27a00929.jpg" no-repeat />
      </div>
      <div className='count'>
        <button onClick={this.increment} onMouseDown= {this.RenderButtonAndSound()} className="button"><span><FontAwesomeIcon icon={faHeart} /></span></button>
        <h2>{this.state.count}</h2>
      </div>
     <div className="comment">
     <div className="pic1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThcvJv0bBa6oLgAzWZXD4RIntSo91Q_xfG0A&usqp=CAU" width="60px" height="60px" no-repeat/>
    </div>  
     <h2>Write a Comment</h2>
      <form>
      <textarea placeholder='Add Your Comment'></textarea>
      <div class="btn">
        <input type="submit" value='Comment' />
        <button id='clear' href='#'>Cancel</button>
        </div>
      </form>
      </div>
    </div>
    <div className="Container1" style={{width:'800px',height:'750px',margin:'10px 200px',padding:"5px",zIndex:'-1',backgroundColor:'pink',border:'2px solid #999',boxSizing:"content-box"}}>
    <div className="pic1">
    <img src="data:image/jpeg;base64,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" width="60px" height="60px" no-repeat/>
      <h2>Karthik</h2>
      <h3>June 23</h3>
    </div>  
      <div className='txt'>
        <h1>"It's not enough to just own a camera. Everyone owns a camera. To be a photographer, you must understand, appreciate, and harness the power you hold!"</h1>
      </div>
      <div className="txtimg">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/bHWgc5MPnPA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className='count'>
        <button onClick={this.increment} onMouseDown= {this.RenderButtonAndSound()} className="button"><span><FontAwesomeIcon icon={faHeart} /></span></button>
        <h2>{this.state.count}</h2>
      </div>
     <div className="comment">
     <div className="pic1">
    <img src="data:image/jpeg;base64,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" width="60px" height="60px" no-repeat/>
    </div>  
     <h2>Write a Comment</h2>
      <form>
      <textarea placeholder='Add Your Comment'></textarea>
      <div class="btn">
        <input type="submit" value='Comment' />
        <button id='clear' href='#'>Cancel</button>
        </div>
      </form>
      </div>
    </div>
    <div className="Container1" style={{width:'800px',height:'750px',margin:'10px 200px',padding:"5px",zIndex:'-1',backgroundColor:'pink',border:'2px solid #999',boxSizing:"content-box"}}>
    <div className="pic1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQP1TNY9ISy55aNHnRLS0i6w7F6n92prEgSEg&usqp=CAU" width="60px" height="60px" no-repeat/>
      <h2>Joel Shwalo</h2>
      <h3>July 20</h3>
    </div>  
      <div className='txt'>
        <h1>"Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness."</h1>
      </div>
      <div className="txtimg">
        <img src="https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" no-repeat />
      </div>
      <div className='count'>
        <button onClick={this.increment} onMouseDown= {this.RenderButtonAndSound()} className="button"><span><FontAwesomeIcon icon={faHeart} /></span></button>
        <h2>{this.state.count}</h2>
      </div>
     <div className="comment">
     <div className="pic1">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQP1TNY9ISy55aNHnRLS0i6w7F6n92prEgSEg&usqp=CAU' width="60px" height="60px" no-repeat/>
    </div>  
     <h2>Write a Comment</h2>
      <form>
      <textarea placeholder='Add Your Comment'></textarea>
      <div class="btn">
        <input type="submit" value='Comment' />
        <button id='clear' href='#'>Cancel</button>
        </div>
      </form>
      </div>
    </div>
    </div>
    </div>
   );
 }
}
export default Home;
