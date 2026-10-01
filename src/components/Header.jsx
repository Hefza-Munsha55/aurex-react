function Header({ onBack, showBack }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg,#a78bfa,#ec4899)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white', fontSize: '20px' }}>AT</div>
                <div>
                    <h1 style={{ color: 'white', fontSize: '24px', margin: 0 }}>TaskFlow</h1>
                    <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0 }}>• Aurex Internship • Hefza Munsha</p>
                </div>
            </div>
            {showBack && <button onClick={onBack} style={{ background: '#1e293b', color: 'white', border: '1px solid #334155', padding: '8px 14px', borderRadius: '8px', cursor: 'pointer' }}>← Home</button>}
        </div>
    )
}
export default Header