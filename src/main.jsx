import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center', background: '#F5F6FA', minHeight: '100vh' }}>
          <h2 style={{ color: '#172033', fontSize: '24px', fontWeight: 'bold' }}>कुछ त्रुटि हुई (An error occurred)</h2>
          <p style={{ color: '#64748B', marginTop: '10px' }}>कृपया पृष्ठ को पुनः लोड करें (Please reload the page).</p>
          <pre style={{ color: '#EF4444', background: '#FFFFFF', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'inline-block', textAlign: 'left', marginTop: '20px', maxWidth: '800px', overflowX: 'auto' }}>
            {this.state.error?.toString()}
          </pre>
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => { localStorage.clear(); window.location.reload(); }}
              style={{ background: '#FF683D', color: '#FFF', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Reset Cache & Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
