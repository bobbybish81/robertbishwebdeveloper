const Resume = () => {
  return (
    <main className='w-100'>
      <iframe
        src={require('../assets/resume.pdf')}
        title='Resume'
        width='100%'
        height='800px'/>
    </main>
  );
};

export default Resume;
