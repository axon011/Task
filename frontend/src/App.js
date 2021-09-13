import React from 'react';
import axios from 'axios';
import Service from './Service/Service';
import './App.css';

class App extends React.Component {
 state ={
    tasks:[],
    id:0,
    task:'',
  }

  saveTask=()=>
  {
    let task={task:this.state.task}
    Service.add(task);
    window.location.reload();
  }
  change=(event)=>
  {
    this.setState({task:event.target.value})
  }
  
componentDidMount(){
Service.getTask().then((res)=>
{
  this.setState({
    tasks:res.data,
  }
    )
});
}

deltask=(id)=>
{

//alert("Do you want to delete")

if(window.confirm('Do you want to delete'))
{
axios.delete("http://localhost:8080/delete/"+id)

}
else
window.location.reload();
window.location.reload();
}
updated=(id,status)=>
{


  
if(status==='Completed')
{
  alert('Already Checked.....');
}

  
  else if(window.confirm('Do you want to mark it Complete'))
  {
    axios.put("http://localhost:8080/update/"+id)
  
  }

  else
  window.location.reload();
  window.location.reload();

}

  render(){
  return (

    <div >
    
      <form> 
        <div class="input-field col s12">
           <i class="material-icons prefix"></i>
           <br/>
           <input value={this.state.task} onChange={this.change} type="text" id="autocomplete-input" class="autocomplete" placeholder='Enter Task'  />
         
        </div>
         <button  onClick={this.saveTask} class="btn waves-effect waves-light right" type="button" name="action">Submit
           <i class="material-icons right"></i>
         </button>
      </form>
    <div className='white'>
    <table className='fortable' >
      <thead>
        <tr className='todo-row'>
          <th> </th>
            <th>Tasks</th>
            <th>Delete</th>
        </tr>
      </thead>

      <tbody>
          {
      
            this.state.tasks.map(tasks =>
            
              <tr className='todo-row' key={tasks.id}>
            
                
                <td>

                     <input name='pack' defaultChecked={tasks.status === "Completed"} type="checkbox" className='striker' value="1" onClick = {()=>this.updated(tasks.id,tasks.status)} 
                     />
                    <span></span>
                     </td>
                    
                    <td > 
                    <label for="striker">
                    
              
             {tasks.task}
             </label>
                    </td>
                  
               <td>
                <button onClick={()=>this.deltask(tasks.id)} class="btn waves-effect waves-light" type="submit" name="action">
         DELETE
       </button>
                </td>

              </tr>
          
              )
     }
      
      </tbody>
    </table>
    </div>
    </div>                
                   
   
  );
}
}
    
     
export default App;