
export default function About(){
    return (
        <>
        <div className="container mx-auto px-6 py-12">
  <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">About Us</h1>
  
  <p className="text-lg text-white mb-4">Welcome to <strong className="text-blue-500">{"<SJBCONNECT/>"}</strong> Our goal is to provide students, faculty, and staff with an easily accessible, comprehensive platform to stay informed and up-to-date with all things related to academics and events happening at our prestigious institution.</p>

  <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
  <p className="text-lg text-white mb-4">At SJB Institute of Technology, we believe in empowering students by providing them with all the resources they need to succeed in their academic journey. From study materials to hackathon updates, we strive to create a seamless, engaging experience that enhances the overall learning experience and promotes student engagement and growth.</p>

  <h2 className="text-2xl font-semibold text-blue-600 mb-4">What We Offer</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-500">Academic Notes</h3>
      <p className="text-white">Access comprehensive subject-specific notes to help you master each module. Study efficiently with our detailed chapter summaries and exam-focused materials.</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-500">Hackathon Updates</h3>
      <p className="text-white">Stay updated on all the exciting hackathons, coding events, and competitions happening at the institute. Get details on schedules, team registrations, and more.</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-blue-500">Faculty Details</h3>
      <p className="text-white">Learn about your professors' areas of expertise, contact details, and how they can guide you in your academic journey. Get to know your mentors!</p>
    </div>
  </div>

  <h2 className="text-2xl font-semibold text-blue-600 mb-4">Why Choose Us?</h2>
  <ul className="list-none pl-6 mb-4">
    <li className="text-lg text-white">Comprehensive Study Material: Access detailed notes for all subjects.</li>
    <li className="text-lg text-white">Engaging Campus Events: Stay updated on hackathons and tech competitions.</li>
    <li className="text-lg text-white">Experienced Faculty: Learn from highly qualified professionals.</li>
  </ul>

  <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h2>
  <p className="text-lg text-white mb-4">To create a dynamic and innovative learning environment that prepares students for the challenges of tomorrow's rapidly changing world.</p>

  <h2 className="text-2xl font-semibold text-blue-600 mb-4">Connect With Us</h2>
  <p className="text-lg text-white mb-4">If you have any questions, suggestions, or would like to contribute notes or event updates, feel free to reach out to us at <a href="#" className="text-blue-500">support@sjbit.edu</a>. We are always here to help!</p>
</div>

        </>
    )
}