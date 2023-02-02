import React, { useState } from 'react';

function CvTabs() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <main>
      <nav>
        <ul>
          <li>
            <button onClick={() => setActiveTab('education')}>Education</button>
          </li>
          <li>
            <button onClick={() => setActiveTab('work-experience')}>Work Experience</button>
          </li>
          <li>
            <button onClick={() => setActiveTab('skills')}>Skills</button>
          </li>
        </ul>
      </nav>
      <section className={activeTab === 'education' ? 'active' : 'hidden'}>
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>University of XYZ</p>
            <p>Graduated: May 20XX</p>
          </li>
        </ul>
      </section>
      <section className={activeTab === 'work-experience' ? 'active' : 'hidden'}>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <h3>Web Developer</h3>
            <p>ABC Company</p>
            <p>May 20XX - Present</p>
            <ul>
              <li>Developed and maintained company website using HTML, CSS, and JavaScript</li>
              <li>Implemented new features to improve user experience and accessibility</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={activeTab === 'skills' ? 'active' : 'hidden'}>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </section>
    </main>
  );
}

export default CvTabs;
