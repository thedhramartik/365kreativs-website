"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const featuredWorks = [
    { title: 'Your Growth is Your Responsiblity', author: 'The Precious Pen', category: 'Prose', excerpt: 'Growth with time? A big lie! Time does not fix things. Growth happens when...', link: "https://www.instagram.com/p/DI4Vh7yI_UP/?igsh=MWg5MXllcGcxY3NtcA==" },
    { title: 'Dear HUBby', author: 'Beth!', category: 'Poetry', excerpt: 'Some love does not ask for permission. It shows up quietly, stays consistently, and becomes home without making noise. This is one of those letters...', link: "https://www.instagram.com/p/DRXs22tCNoY/?igsh=MWkwMzFtYmxld3B4bg==" },
    { title: 'Smell of Fresh Beginnings', author: 'truth_andchaos', category: 'Poetry', excerpt: 'What does a fresh beginnings smell like to you. Wanna know mine...', link: "https://www.instagram.com/p/DS9uky8jTVV/?igsh=ODlsYXppbGdrenc0" }
  ];
  const featuredMembers = [
    { name: 'Muyiwasam', role: 'Longest Serving Executive', bio: 'A catalyst who have carried the Hub, tirelessly giving his all to the media Team against all odds.', image: "/image.png", link: "https://www.instagram.com/p/DO3pQdUjiu9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { name: 'Crownedwealth', role: 'Executive of The Year 2025', bio: 'From structure to spirit, Crownedwealth has left her imprint on the Hub, not just in systems, but in service.', image: "/image.png", link: "https://www.instagram.com/p/DO3qTfADvuO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { name: 'DeeNurseWriter', role: 'Kreativ of The Year 2025', bio: 'From birthing the endearing word Hubby, to coming out overall best in the 100-day writing marathon B1 and winning the 365Duel September edition. She truly redifined what it truly means to be a KREATIV.', image: "/image.png", link: "https://www.instagram.com/p/DO3rB5ZjtZY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { name: 'Ebunife', role: 'Consistency Queen 2025', bio: 'Ebunife pen never runs dry, in stories, even in services, she is always there, even when it is not convenient.', image: "/image.png", link: "https://www.instagram.com/p/DO9ALVbEQzm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { name: 'Henshaw', role: 'Consistency King 2025', bio: 'Earned proof, not noise, for showing up every time and always contributing to the growth of the hub.', image: "/image.png", link: "https://www.instagram.com/p/DO6rt7xCWm8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { name: 'Liyahs Musing', role: 'Rising Star Kreativ 2025', bio: 'Liyah engages with every comment, contribution, and cheer. Her creative growth is also one that inspires us all', image: "/image.png", link: "https://www.instagram.com/p/DPBHxGOjUdc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
  ];
  return (
    <div className="font-sans">
      <div className="bg-[#242426] w-full mx-auto">
        <div className="fixed top-0 left-0 right-0 z-50 shadow-2xl bg-[#2c2c31] text-[#fcf4e1]">
          <div className="flex justify-between py-4 px-4 sm:px-8 lg:px-12">
            <div className="font-extrabold flex items-center">

              <img
                src="/logo.png"
                alt="Profile image"
                className="w-6 h-6 rounded-full object-cover"
              />
              <p className="ml-2">THE 365KREATIVS</p>

            </div>
            <div className="hidden md:flex gap-4">
              <a href={"#home"} className="">Home</a>
              <a href={"#about"} className="">About Us</a>
              <a href={"#featured-works"} className="">Featured Works</a>
              <a href={"#community"} className="">Our Community</a>
              <a href={"#contact"} className="">Contact Us</a>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#bc3a08] px-4 py-4 flex flex-col gap-3">
              <a
                href="#home"
                className="hover:text-[#ff6f3a] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-[#ff6f3a] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#featured-works"
                className="hover:text-[#ff6f3a] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Featured Works
              </a>
              <a
                href="#community"
                className="hover:text-[#ff6f3a] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Community
              </a>
              <a
                href="#contact"
                className="hover:text-[#ff6f3a] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          )}

        </div>

        {/* HERO */}
        <section id="home" className="px-10 flex flex-col items-center">
          <div className="mt-32">

            <img
              src="/logo.png"
              alt="Profile image"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <div className="mt-10 flex-col items-center text-center gap-6">
            <h1 className="text-[#bc3a08] mb-4 text-4xl font-bold">THE 365KREATIV HUB</h1>
            <p className="w-full lg:max-w-[65%] md:max-w-[75%] md:mx-auto px-4 sm:px-6 lg:px-8 opacity-60">Welcome to a vibrant community that empowers creatives across various disciplines - writers, spoken word artistes, photographers, etc - to cultivate a consistent lifestyle, unlock their full potential, and showcase their unique talents.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 my-10 text-[14px]">
            <a
              className="bg-[#bc3a08] text-white px-8 py-3 rounded-4xl font-semibold hover:bg-[#424244] hover:text-white hover:opacity-50 transition-colors"
              href="https://wa.me/message/Y2PFS5AHL36UO1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Community
            </a>
            {/* <button className="bg-[#424244] text-white px-8 py-3 rounded-4xl font-semibold hover:bg-[#bc3a08] hover:text-white opacity-50 hover:opacity-100 transition-colors">
              Read Our Works
            </button> */}
          </div>
        </section>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 py-4 px-4 sm:px-8 lg:px-12">
          <div className="bg-[#424244] p-6 rounded-xl shadow-md text-center">
            <h3 className="text-3xl font-bold text-white mb-1">500+</h3>
            <p className="text-[#bc3a08]">Active Members</p>
          </div>
          <div className="bg-[#424244] p-6 rounded-xl shadow-md text-center">
            <h3 className="text-3xl font-bold text-white mb-1">120+</h3>
            <p className="text-[#bc3a08]">Published Works</p>
          </div>
          <div className="bg-[#424244] p-6 rounded-xl shadow-md text-center">
            <h3 className="text-3xl font-bold text-white mb-1">120+</h3>
            <p className="text-[#bc3a08]">Events Hosted</p>
          </div>
        </div>

        {/* ABOUT US */}
        <section id="about" className="mt-16 py-4 px-4 sm:px-8 lg:px-12">
          <div className="mx-auto">
            <h1 className="text-4xl font-bold text-[#bc3a08] mb-6 text-center">About Us</h1>

            <div className="bg-[#424244] rounded-2xl p-8 mb-8">
              <p className="text-white text-lg mb-6 leading-relaxed">
                We are vibrant community that empowers creatives across various disciplines – writers, spoken word artistes, photographers, painters, innovators etc – to cultivate a consistent practice, unlock their full potential, and showcase their unique talents.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#ffe2d7] p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-[#bc3a08] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
                <p className="text-gray-700 text-sm">
                  Our vision is to become a leading creative hub where innovators and artists thrive through consistency, and their unique voices are steadily amplified.</p>
              </div>

              <div className="bg-[#ffe2d7] p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-[#bc3a08] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-700 text-sm">
                  Our mission is to provide a dynamic and inclusive platform that nurtures creativity by building consistency, fostering collaboration, and empowering artists to realize their full potential.
                </p>
              </div>

              <div className="bg-[#ffe2d7] p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-[#bc3a08] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Values</h3>
                <p className="text-gray-700 text-sm">
                  Consistency, authenticity, inclusion, integrity, growth, and support to amplify unique voices and inspire personal growth and positive societal impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Works */}
        <section id="featured-works" className="lg:mt-16 mt-8 py-4 px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-[#fcf4e1]">Featured Works</h2>
            {/* <a href="" target="_blank" rel="noopener noreferrer" className="text-[#bc3a08] hover:text-[#a8692a] font-semibold flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </a> */}
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {featuredWorks.map((work, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <a href={work.link} className="" target="_blank" rel="noopener noreferrer">
                  <span className="inline-block bg-[#bc3a08] text-white text-sm px-3 py-1 rounded-full mb-3">{work.category}</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{work.title}</h3>
                  <p className="text-black opacity-65 mb-2">by {work.author}</p>
                  <p className="text-black opacity-80 italic">{work.excerpt}</p>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-4 px-4 sm:px-8 lg:px-12 mt-16">
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-[#bc3a08] mb-6 text-center">Community Voices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#5c5c5c] p-6 rounded-xl">
                <p className="text-white opacity-85 mb-4 italic">"The Hub has strengthened my writing prowess, expanded my knowledge, and challenged me to show up better through intentional contests and creative community. It embodies love, light, community and growth — and I am truly grateful to be a member."</p>
                <p className="font-semibold text-black">— Darasimi Bamirola, Writer</p>
              </div>
              <div className="bg-[#5c5c5c] p-6 rounded-xl">
                <p className="text-white opacity-85 mb-4 italic">"Being part of the Hub has been amazing to my creative journey. The environment is inspiring and supportive. It is really a home for creatives to grow, collaborate, and thrive daily."</p>
                <p className="font-semibold text-black">— Okoro David, Photographer</p>
              </div>
            </div>
          </div>
        </section>


        {/* TEAM */}
        <section id="community" className="py-4 px-4 sm:px-8 lg:px-12 mt-16">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#bc3a08]">Our Community</h1>
            <a
              className="bg-[#bc3a08] text-white px-8 py-3 rounded-lg hidden md:block font-semibold hover:bg-[#424244] hover:text-white hover:opacity-50 transition-colors"
              href="https://linktr.ee/the365kreativhub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us
            </a>
          </div>

          <section className="mt-4 bg-linear-to-r from-[#ffc6b1] to-[#ff6f3a] text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold text-[#bc3a08] mb-3">Kreativ of the Month - Dec 2025</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">

              <img
                src="/image.png"
                alt="Profile image"
                className="w-34 h-34 rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-black mb-2 text-center md:text-left">Tahiral Amal</h3>
                <p className="text-black opacity-80 mb-3 text-justify">
                  A passionate writer and poet whose word is rooted in sincerity, emotion, and intentional storytelling. Through ink and reflection, she captures love, life, and becoming with a voice that feels both gentle and powerful.
                </p>

                <div className="flex justify-center md:justify-start">
                  <a
                    href={"https://www.instagram.com/p/DS5B8rPiOXW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
                    className="text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white inline text-[#bc3a08] px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-sm">
                      View Profile
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-bold text-[#bc3a08] mb-3">Featured Members</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredMembers.map((member, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col">
                  <div className="w-20 h-20 bg-linear-to-br from-[#ffc6b1] to-[#ff6f3a] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                    <img
                      src={member.image}
                      alt="Profile image"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 text-center mb-2">{member.name}</h3>
                  <p className="text-[#bc3a08] text-center mb-3 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-sm text-center mb-4 grow">
                    {member.bio}
                  </p>

                  <div className="">
                    <a
                      href={member.link}
                      className="text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-full mx-auto bg-[#ffe2d7] text-[#bc3a08] py-2 rounded-lg font-semibold hover:bg-purple-100 transition-colors text-sm">
                        View Works
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-12 py-4 px-4 sm:px-8 lg:px-12">
          <div className="">
            <h1 className="text-4xl font-bold text-[#bc3a08] mb-2">Contact Us</h1>
            <p className="text-xl text-white">We'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="w-full bg-[#ffe2d7] text-[#bc3a08] p-6 rounded-lg font-semibold hover:bg-purple-100 transition-colors text-sm text-center">
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <a
                href="mailto:the365kreativhub@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                the365kreativhub@gmail.com
              </a>

            </div>
            <div className="w-full bg-[#ffe2d7] text-[#bc3a08] p-6 rounded-lg font-semibold hover:bg-purple-100 transition-colors text-sm text-center">
              <h3 className="font-bold text-gray-800 mb-2">Social Media</h3>
              <a
                href="https://linktr.ee/the365kreativhub"
                target="_blank"
                rel="noopener noreferrer"
              >
                linktr.ee/the365kreativhub
              </a>
            </div>
            <div className="w-full bg-[#ffe2d7] text-[#bc3a08] p-6 rounded-lg font-semibold hover:bg-purple-100 transition-colors text-sm text-center">
              <h3 className="font-bold text-gray-800 mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/message/Y2PFS5AHL36UO1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send us a message
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 bg-[#1a1a1c] border-t border-[#424244]">
          <div className="py-12 px-4 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Brand Section */}
              <div className="md:col-span-3">
                <h3 className="text-[#bc3a08] text-2xl font-bold mb-4">THE 365KREATIVS</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Empowering creatives to cultivate a consistent practice, unlock their full potential, and showcase their unique talents.
                </p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/the365kreativs/" target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#bc3a08] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                  </a>
                  <a href="https://x.com/the365kreativs" target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#bc3a08] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/the365kreativs" target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#bc3a08] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@365kreativs" target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#bc3a08] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-[#fcf4e1] font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href={"#home"} className="text-gray-400 hover:text-[#bc3a08] transition-colors text-sm">Home</a></li>
                  <li><a href={"#about"} className="text-gray-400 hover:text-[#bc3a08] transition-colors text-sm">About Us</a></li>
                  <li><a href={"#featured-works"} className="text-gray-400 hover:text-[#bc3a08] transition-colors text-sm">Featured Works</a></li>
                  <li><a href={"#community"} className="text-gray-400 hover:text-[#bc3a08] transition-colors text-sm">Our Community</a></li>
                  <li><a href={"#contact"} className="text-gray-400 hover:text-[#bc3a08] transition-colors text-sm">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#424244] py-6 px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} THE 365KREATIVS. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
