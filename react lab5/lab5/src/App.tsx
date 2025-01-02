
import Cart from './components/koszyk/cart'
import NewCart from './components/koszyk/newCart'
import './App.css'
import Counter from './components/licznik/counter'
import NewCounter from './components/licznik/newCounter'
import Form from './components/formularze/form'
import Password from './components/formularze/password'
import Login from './components/formularze/login'
import Ternary from './components/inne/ternary'
import Update from './components/inne/update'
import Students from './components/studenci/students'
import StudentsManager from './components/studenci/studentManager'
import CounterEffect  from './components/efekty/counter'
import Title from './components/efekty/tytuł'
import Countdown from './components/efekty/odliczanie'
import Comment from './components/produkty/comment'
import Comments from './components/produkty/comments'


function App() {


  return (
    <>
    <div style={{ border: '1px solid black' }}><Cart /></div>
    <div style={{ border: '1px solid black' }}><NewCart /></div>
    <div style={{ border: '1px solid black' }}><Counter /></div>
    <div style={{ border: '1px solid black' }}><NewCounter /></div>
    <div style={{ border: '1px solid black' }}><Form /></div>
    <div style={{ border: '1px solid black' }}><Password /></div>
    <div style={{ border: '1px solid black' }}><Login /></div>
    <div style={{ border: '1px solid black' }}><Ternary /></div>
    <div style={{ border: '1px solid black' }}><Update /></div>
    <div style={{ border: '1px solid black' }}><Students /></div>
    <div style={{ border: '1px solid black' }}><StudentsManager /></div>
    <div style={{ border: '1px solid black' }}><CounterEffect /></div>
    <div style={{ border: '1px solid black' }}><Title /></div>
    <div style={{ border: '1px solid black' }}><Countdown /></div>
    <div style={{ border: '1px solid black' }}><Comment id={1} body="Testowy komentarz" postId={5} likes={30} user={{id:2, username:"wojciech ", fullname:"Wojciech Pawlina" }}/></div>
    <div style={{ border: '1px solid black' }}><Comments/></div>
    


      
    </>
  )
}

export default App
