import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import '../Styles/TeachesComponentt.css';

const TeachesComponentt = () => {
    const teacherNames = ['Sunil', 'Rahul', 'Ashrei', 'Ashray', 'Ashish', 'Xinia'];

    const teachesColos = ['#7f52fe', '#5352fe', '#FE5268', '#5291fe', '#52fea0', '#affe52']

    const [selectedTeacher, setSelectedTeacher] = useState('Ashrei');
    const [selectedTeacherColor, setSelectedTeacherColor] = useState('#FE5268');
    const [selectedButton, setSelectedButton] = useState(null);

    const handleSelectedTeacher = (teacher) => {
        const index = teacherNames.indexOf(teacher);
        setSelectedTeacher(teacher);
        setSelectedTeacherColor(teachesColos[index]);
    };

    const handlePrevTeacher = () => {
        const currentIndex = teacherNames.indexOf(selectedTeacher);
        const prevIndex = (currentIndex - 1 + teacherNames.length) % teacherNames.length;
        setSelectedTeacher(teacherNames[prevIndex]);
        setSelectedTeacherColor(teachesColos[prevIndex])
        setSelectedButton('prev')

        setTimeout(() => {
            setSelectedButton(null)

        }, 300);
    };

    const handleNextTeacher = () => {
        const currentIndex = teacherNames.indexOf(selectedTeacher);
        const nextIndex = (currentIndex + 1) % teacherNames.length;
        setSelectedTeacher(teacherNames[nextIndex]);
        setSelectedTeacherColor(teachesColos[nextIndex])
        setSelectedButton('next')

        setTimeout(() => {
            setSelectedButton(null)
        }, 300);
    };

    return (
        <section id='teachers' className='main'>
            <SectionTitle heading2='Our Teachers' />

            <div className="teachersParts">
                <ul className="teacherNames">
                    {teacherNames.map((currElem, index) => (
                        <li
                            className={currElem === selectedTeacher ? 'activeTeacher' : ''}
                            onClick={() => handleSelectedTeacher(currElem)}
                            key={index}
                        >
                            {currElem}
                        </li>
                    ))}
                </ul>

                <div className="teacherDetails">
                    <svg xmlns="http://www.w3.org/2000/svg" width="182" height="160" viewBox="0 0 182 160" fill="none">
                        <path d="M0 16C0 7.16345 7.16344 0 16 0H166C174.837 0 182 7.16344 182 16V144C182 152.837 174.837 160 166 160H16C7.16344 160 0 152.837 0 144V16Z" fill={selectedTeacherColor} />
                    </svg>
                    <div className="details">
                        <p>
                            {selectedTeacher} started his journey in yoga at the age of 16. He was chosen by his master Dr. Bharat Thakur from a meditation workshop and has worked with him closely for many years to become one of the most senior teachers at Bharat Thakur Artistic Yoga. Combining his love of fitness, breathwork, functional training, and his deep knowledge of the human anatomy and yogic knowhow, he is committed to maximizing on the human potential by strengthening and opening up the body so that the mind naturally falls into a deep state of relaxation and meditation. He has taught yoga to people from all walks of life including athletes, celebrities and several top corporate organizations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="detailsControls">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="25"
                    viewBox="0 0 23 25"
                    fill="none"
                    onClick={handlePrevTeacher}
                    className={selectedButton === 'prev' ? 'activeButton' : ''}
                >
                    <path d="M1.99999 15.9641C-0.666672 14.4245 -0.666666 10.5755 2 9.0359L16.25 0.808653C18.9167 -0.730947 22.25 1.19356 22.25 4.27276V20.7272C22.25 23.8064 18.9167 25.7309 16.25 24.1913L1.99999 15.9641Z" fill="#FE5266" />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="25"
                    viewBox="0 0 23 25"
                    fill="none"
                    onClick={handleNextTeacher}
                    className={selectedButton === 'next' ? 'activeButton' : ''}

                >
                    <path d="M21 15.9641C23.6667 14.4245 23.6667 10.5755 21 9.0359L6.74999 0.808653C4.08333 -0.730947 0.75 1.19356 0.75 4.27276V20.7272C0.75 23.8064 4.08333 25.7309 6.75 24.1913L21 15.9641Z" fill="#FE5266" />
                </svg>
            </div>
        </section>
    );
};

export default TeachesComponentt;
