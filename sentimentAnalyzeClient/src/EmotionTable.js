import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {

  render() {
    const emotionsList = Object.entries(this.props.emotions).map((emotions) => {
      return (
        <tr key={emotions[0]}>
          <td>{emotions[0]}</td> 
          <td>{emotions[1]}</td>
        </tr>
      );
    });
    //Returns the emotions as an HTML table
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            {
              /*Write code to use the .map method that you worked on in the 
              Hands-on React lab to extract the emotions. If you are stuck,
              please click the instructions to see how to implement a map*/
              emotionsList
            }
          </tbody>
        </table>
      </div>
    );
  }

}
export default EmotionTable;