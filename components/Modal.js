import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen, onClose }) => {



    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
 
    >
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        position: 'relative'
      }}
  
      >
        {children}
      </div>
    </div>,
    document.body

};

export default Modal;
