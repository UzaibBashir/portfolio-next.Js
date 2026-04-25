import React from 'react'

const About = () => {
  return (
    <footer class="bg-[#21212e] py-12">
            <div class="container mx-auto px-6 lg:px-12">
                <div class="grid md:grid-cols-3 gap-8 mb-8">
                    
                    <div>
                        <div class="flex items-center space-x-3 mb-4">
                            <img src="/logo.png" class="h-10 w-10 rounded-full" alt="Uzaib logo"></img>
                            <span class="text-xl font-bold text-white">Uzaib Bashir</span>
                        </div>
                        <p class="text-gray-400 mb-4">
                            Artist Computer Science and Engineering student  Full Stack Developer
                        </p>
                        <div class="flex space-x-4">
                            <a href="https://github.com/UzaibBashir" target="_blank"
                                class="text-gray-400 hover:text-[#793fff] transition-colors">
                                <i class="bi bi-github text-xl"></i>
                            </a>
                            <span class="text-gray-500 text-sm">More social links available on request</span>
                        </div>
                    </div>
                    

                    
                    <div>
                        <h3 class="text-white font-bold text-lg mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li><a href="#home" class="text-gray-400 hover:text-[#793fff] transition-colors">Home</a>
                            </li>
                            <li><a href="#about" class="text-gray-400 hover:text-[#793fff] transition-colors">About</a>
                            </li>
                            <li><a href="#skills"
                                    class="text-gray-400 hover:text-[#793fff] transition-colors">Skills</a></li>
                            <li><a href="#experience"
                                    class="text-gray-400 hover:text-[#793fff] transition-colors">Experience</a></li>
                            <li><a href="#projects"
                                    class="text-gray-400 hover:text-[#793fff] transition-colors">Projects</a></li>
                            <li><a href="#contact"
                                    class="text-gray-400 hover:text-[#793fff] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 class="text-white font-bold text-lg mb-4">Contact Info</h3>
                        <div class="space-y-2 text-gray-400">
                            <div class="flex items-center space-x-2">
                                <i class="bi bi-envelope"></i>
                                <span>Email available on request</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="bi bi-geo-alt"></i>
                                <span>India</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="bi bi-clock"></i>
                                <span>Available for freelance</span>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </footer>

  )
}

export default About
