const Logo = () => {
    return (
        <div style={{
            display: 'flex',
            height: '2.5rem', // 40px
            width: '2.5rem', // 40px
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0.5rem', // 8px
            background: 'linear-gradient(to bottom right, #9333ea, #3b82f6)', // purple-600 to blue-500
            color: 'white',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8 9h8" />
                <path d="M8 13h6" />
                <path d="M18 4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12z" />
                <path d="m15 22-3-3 3-3" />
            </svg>
        </div>
    )
}


export default Logo;