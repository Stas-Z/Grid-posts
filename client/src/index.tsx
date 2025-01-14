import { App } from '@/app/App'
import '@/app/styles/index.scss'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
if (!container) {
    throw new Error("Container root not found. Can't mount react app")
}
const root = createRoot(container)

root.render(<App />)
