import React from 'react';

const Dashboard = () => {
    const student = {
        name: "Alex Kumar",
        branch: "Computer Science & Engineering",
        year: "3rd Year",
        level: "Intermediate",
        streak: 12
    };

    return (
        <div className="glass-panel p-6 mb-6 animate-fade-in" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Welcome back, {student.name} 👋</h2>
                <p style={{ color: 'var(--text-secondary)', margin: '4px 0 0 0' }}>
                    {student.branch} • {student.year}
                </p>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
                <div className="stat-item" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>{student.streak}🔥</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Day Streak</div>
                </div>
                <div className="stat-item" style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--success)' }}>{student.level}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Level</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
