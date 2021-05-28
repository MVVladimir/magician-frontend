import {TaskList} from '../pages/TaskList';
import getScene, { API_URL } from '../services/APIHelper.js'
import React, { useEffect, useState } from 'react';

import {
  createSmartappDebugger,
  createAssistant,
} from "@sberdevices/assistant-client";

import { darkSber } from '@sberdevices/plasma-tokens/themes';
import { Button } from '@sberdevices/ui/components/Button/Button';
import { Container, Row, Col } from '@sberdevices/plasma-ui/components/Grid';
import { Image } from '@sberdevices/ui/components/Image/Image';
import { Spinner } from '@sberdevices/plasma-ui/components/Spinner'
import { Headline1 } from '@sberdevices/plasma-ui';

import Indicators from './indicators'
import './scene.css';

const YOUDIED = 99999;

let lives = 3;
let glory = 50;
let light = 50;
let darkness = 50;

let counter = 0;
let currentId = 0;
let pictures = [];

let randEvents = [100];
let curEvents = [100];

const setBackground = {
  backgroundImage: ''
}

const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};


const fetchedData = async (id) => {
  return await getScene(id);
}

export class Scene extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');

    //this.value = 0;

    this.state = {
      notes: [],
      scene:           null,
      backgroundImage: { background: '' }
    };

    this.assistant = initializeAssistant(() => this.getStateForAssistant() );
    this.assistant.on("data", (event/*: any*/) => {
      console.log(`assistant.on(data)`, event);
      const { action } = event
      this.dispatchAssistantAction(action);
    });
    this.assistant.on("start", (event) => {
      console.log(`assistant.on(start)`, event);
    });

  }

  async componentDidMount() {
    console.log('componentDidMount');
    const response = await getScene(currentId);
    console.log(response);
    const { data } = response;
    this.setState({ scene: data });
    this.read();
  }

  getStateForAssistant () {
    console.log('getStateForAssistant: this.state:', this.state)
    const state = {
      item_selector: {
        items: { text : this.state.scene.text }
      }
    };

    console.log('getStateForAssistant: state:', state)
    return state;
  }

  dispatchAssistantAction (action) {
    console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case 'add_note':
          console.log('add_note', action, 'action.choice = ', action.choice);
          return this.add_note(action);

        
        case 'read':
          return this.read();

        /*
        case 'delete_note':
          return this.delete_note(action);
        default:
          throw new Error();
        */
      }
    }
  }

  read () {
    this.assistant.sendData( { action : { action_id : 'read' } } );
  }

  add_note (action) {
    let choice = action.choice;
    console.log(choice);

    if (choice == 'один' || choice == 'первый' || choice == 'первое' || choice == 'первую') {
      choice = 1;
    }
    if (action.choice == 'два' || choice == 'второй'|| choice == 'второе' || choice == 'вторую') {
      choice = 2;
    }
    if (action.choice == 'три' || choice == 'третий'|| choice == 'третье' || choice == 'третью') {
      choice = 3;
    }
    if (action.choice == 'четыре' || choice == 'четвертый'|| choice == 'четвертое' || choice == 'четвертую') {
      choice = 4;
    }

    this.state.scene.options.forEach((item, index) => {
      console.log('index = ', index, 'choice = ', choice);
      if ((item.text === choice) || (index + 1 === choice)) {
        console.log('movedTo', item.id);
        this.moveTo(item.id);
      }
    })
    //return this.state;
  }

  /*add_note (action) {
    console.log('add_note', action);
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id:        Math.random().toString(36).substring(7),
          title:     action.note,
          completed: false,
        },
      ],
    })
  }*/

  setBackgrounds (curImg) {
    pictures.push(curImg);
    //debugger;
    let string = ``;
    pictures.reverse();
    pictures.forEach((pic, index) => {
      string = string + `url(${API_URL}/${pic}.png) center no-repeat`;
      if (index < pictures.length - 1){
        string = string + ',';
      }
    });
    //setBackgroundImage({background : string});
    this.setState({ backgroundImage: {background : string}})
    pictures.reverse();
  }
  
  moveTo(nextId) {
    //fetchedData(nextId)
    if ((lives == 0 || light == 0 || darkness == 0 || glory == 0) && this.state.scene.id != YOUDIED ) {
      nextId = YOUDIED;
    }

    console.log('NEXT IS ', nextId);

    if (!nextId) {
      nextId = Math.floor(Math.random() * curEvents.length);
      nextId = curEvents[nextId];
    }

    if ((nextId == 0 || nextId == 1) && this.state.scene.id > 1) {
      setBackground.backgroundImage = '';
      curEvents = randEvents;
      counter = 1;
      lives = 3;
      glory = 50;
      light = 50;
      darkness = 50;
    }

    getScene(nextId)
      .then((response) => {
        const { data } = response;
        //setScene(data);
        this.setState({ scene: data });
        this.read();
        counter++;

        if (counter > 0 && data.img) {
          this.setBackgrounds(data.img);
        }

        console.log('data', data);

        if (data.bonus) {
          lives += data.bonus.lives;
          light += data.bonus.light;
          darkness += data.bonus.darkness;
          glory += data.bonus.glory;
        }
      });
  }

  render() {

    /*
    const [scene, setScene] = useState(null);
    const [scene, setScene] = useState(null);

    const [backgroundImage, setBackgroundImage] = useState({background : ''});

    const fetchedData = async (id) => {
       return await getScene(id);
    }
    
    useEffect(() => {
       fetchedData(currentId).then((response) => {
           console.log(response);
           const { data } = response;
           setScene(data);
       })
    }, []);
    */

     const { scene, backgroundImage } = this.state;

    /*изначально было setBackgroundImage({background : `url(${API_URL}/${curImg}.png) center no-repeat`});*/

    if (scene) {
      if (scene.options) {

        if (counter == 0) {
          return (
            < >
              <Col type="calc" offsetS={1} offsetM={2} offsetL={3} offsetXL={4} sizeS={1} sizeM={2} sizeL={3} sizeXL={4} />
              <Headline1> { scene.text } </Headline1>
              {
                scene.options.map((item) => {
                  return (
                    <Row>
                      <Button style={{ marginBottom: '1rem', width: '100%' }} stretch={true} size="l" onClick={ () => this.add_note({choice: item.text}) }>
                        {item.text}
                      </Button>
                    </Row>
                  );
                })
              }
            </>
          );
        }

        return(
          // <Container styles={darkSber} >
              <Row>
                <Col>
                  <div style={backgroundImage} className = 'img-Wrapper'>
                     {/* <img  src={API_URL + '/' + scene.img + '.png' } height={'450'} width={'450'} /> */}
                  </div>
                 
                <Indicators lives={lives} light={light} darkness={darkness} glory={glory} />
                </Col>
                  <Col type="calc" sizeS={4} sizeM={6} sizeL={6} sizeXL={6}>
                  <Headline1> { scene.text   } </Headline1>
                  {
                    scene.options.map((item) => {
                      return (
                        <Row>
                          <Button style={{ marginBottom: '1rem', width: '100%' }} stretch={true} size="l" onClick={ () => this.add_note({choice: item.text}) }>
                            {item.text}
                          </Button>
                        </Row>
                      );
                    })
                  }
                  </Col>
          </Row>
            //{ console.log('values: ', lives, ' ', light, ' ', darkness, ' ', glory) }
          // </Container>
        );
      }
    } else {
      return () => <Spinner />
    }
  }
}

export default Scene;