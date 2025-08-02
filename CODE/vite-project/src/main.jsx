import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EmojiClicker from './EmojiClicker.jsx'
import ScoreKeeper from './ScoreKeeper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <EmojiClicker /> */}
    <ScoreKeeper numplayers={3} target={5} />
  </StrictMode>,
)
