import './App.css'
import { FaBeer } from "react-icons/fa";
import { Button } from './Components/Button';

function App() {


  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <Button colorScheme='red' leftIcon={<FaBeer />} rightIcon={<FaBeer />}>
            Hello
            <div>
              world
            </div>
          </Button>
        </div>
        <br />
        <div>
          <Button colorScheme='yellow' leftIcon={<FaBeer />} >
            Hello
          </Button>
        </div>
        <br />
        <div>
          <Button colorScheme='green' rightIcon={<FaBeer />}>
            Hello
          </Button>
        </div>
        <br />
        <div>
          <Button colorScheme='green' >
            Hello
          </Button>
        </div>
      </div>

    </>
  )
}

export default App
