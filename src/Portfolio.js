import { useState } from 'react';
import { Terminal, Code, User, Briefcase, Mail, Github, Linkedin, Twitter, Folder, FileCode, ChevronRight, ChevronDown } from 'lucide-react';

function Portfolio() {
  const [activeTab, setActiveTab] = useState('about.js');
  const [expandedFolders, setExpandedFolders] = useState(['src']);

  const tabs = [
    { name: 'about.js', icon: FileCode },
    { name: 'skills.json', icon: FileCode },
    { name: 'projects.js', icon: FileCode },
    { name: 'contact.md', icon: FileCode }
  ];

  const fileStructure = {
    src: ['about.js', 'skills.json', 'projects.js', 'contact.md']
  };

  const toggleFolder = (folder) => {
    setExpandedFolders(prev =>
      prev.includes(folder) ? prev.filter(f => f !== folder) : [...prev, folder]
    );
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'about.js':
        return (
          <div className="font-mono text-sm">
            <div className="flex gap-2 mb-4">
              <span className="text-purple-400">const</span>
              <span className="text-blue-300"> developer</span>
              <span className="text-white"> = {'{'}</span>
            </div>
            <div className="ml-6 mt-2 space-y-1">
              <div><span className="text-blue-300">name</span>: <span className="text-green-300">"Your Name"</span>,</div>
              <div><span className="text-blue-300">role</span>: <span className="text-green-300">"Full Stack Developer"</span>,</div>
              <div><span className="text-blue-300">location</span>: <span className="text-green-300">"Your Location"</span>,</div>
              <div><span className="text-blue-300">experience</span>: <span className="text-orange-300">3</span>, <span className="text-gray-500">// years</span></div>
              <div><span className="text-blue-300">bio</span>: <span className="text-green-300">"Passionate developer who loves creating elegant solutions to complex problems. Focused on building scalable applications with modern technologies."</span>,</div>
              <div><span className="text-blue-300">passions</span>: [<span className="text-green-300">"Clean Code"</span>, <span className="text-green-300">"Open Source"</span>, <span className="text-green-300">"Learning"</span>],</div>
              <div><span className="text-blue-300">hobbies</span>: [<span className="text-green-300">"Coding"</span>, <span className="text-green-300">"Reading"</span>, <span className="text-green-300">"Coffee"</span>]</div>
            </div>
            <div className="mt-2">{'}'};</div>
            
            <div className="mt-6">
              <span className="text-gray-500">// Export the developer object</span>
            </div>
            <div className="mt-2">
              <span className="text-purple-400">module.exports</span>
              <span className="text-white"> = developer;</span>
            </div>

            <div className="mt-8 p-4 bg-gray-800/50 rounded border border-gray-700">
              <div className="text-yellow-300 mb-2">console.log(developer.bio);</div>
              <div className="text-gray-400">// Output: {'"'}Passionate developer who loves creating elegant solutions...{'"'}</div>
            </div>
          </div>
        );
      case 'skills.json':
        return (
          <div className="font-mono text-sm">
            <div className="text-white">{'{'}</div>
            <div className="ml-4">
              <div className="text-blue-300">"frontend"<span className="text-white">: [</span></div>
              <div className="ml-6 space-y-1">
                <div className="text-green-300">"React.js",</div>
                <div className="text-green-300">"JavaScript (ES6+)",</div>
                <div className="text-green-300">"HTML5 & CSS3",</div>
                <div className="text-green-300">"Tailwind CSS",</div>
                <div className="text-green-300">"Redux"</div>
              </div>
              <div className="text-white">],</div>
              
              <div className="mt-3 text-blue-300">"backend"<span className="text-white">: [</span></div>
              <div className="ml-6 space-y-1">
                <div className="text-green-300">"Node.js",</div>
                <div className="text-green-300">"Express.js",</div>
                <div className="text-green-300">"PostgreSQL",</div>
                <div className="text-green-300">"MongoDB",</div>
                <div className="text-green-300">"REST APIs"</div>
              </div>
              <div className="text-white">],</div>

              <div className="mt-3 text-blue-300">"tools"<span className="text-white">: [</span></div>
              <div className="ml-6 space-y-1">
                <div className="text-green-300">"Git & GitHub",</div>
                <div className="text-green-300">"Docker",</div>
                <div className="text-green-300">"VS Code",</div>
                <div className="text-green-300">"Webpack",</div>
                <div className="text-green-300">"npm/yarn"</div>
              </div>
              <div className="text-white">],</div>

              <div className="mt-3 text-blue-300">"softSkills"<span className="text-white">: [</span></div>
              <div className="ml-6 space-y-1">
                <div className="text-green-300">"Problem Solving",</div>
                <div className="text-green-300">"Team Collaboration",</div>
                <div className="text-green-300">"Communication",</div>
                <div className="text-green-300">"Agile/Scrum"</div>
              </div>
              <div className="text-white">]</div>
            </div>
            <div className="text-white">{'}'}</div>
          </div>
        );
      case 'projects.js':
        return (
          <div className="font-mono text-sm">
            <div className="mb-4">
              <span className="text-gray-500">// My awesome projects</span>
            </div>
            
            <div className="mb-2">
              <span className="text-purple-400">const</span>
              <span className="text-blue-300"> projects</span>
              <span className="text-white"> = [</span>
            </div>

            {[
              {
                name: "E-Commerce Platform",
                desc: "Full-stack online store with payment integration and real-time inventory",
                tech: ["React", "Node.js", "Stripe", "MongoDB"],
                status: "Completed"
              },
              {
                name: "Task Management App",
                desc: "Collaborative project management tool with real-time updates",
                tech: ["React", "Express", "Socket.io", "PostgreSQL"],
                status: "In Progress"
              },
              {
                name: "Weather Dashboard",
                desc: "Real-time weather data visualization with interactive maps",
                tech: ["React", "OpenWeather API", "Chart.js"],
                status: "Completed"
              },
              {
                name: "Portfolio Website",
                desc: "VS Code themed developer portfolio with interactive UI",
                tech: ["React", "Tailwind CSS", "Lucide Icons"],
                status: "You're looking at it! 😄"
              }
            ].map((project, idx) => (
              <div key={idx} className="ml-4 mb-4 border-l-2 border-gray-700 pl-4">
                <div className="text-white">{'{'}</div>
                <div className="ml-4">
                  <div><span className="text-blue-300">name</span>: <span className="text-green-300">"{project.name}"</span>,</div>
                  <div><span className="text-blue-300">description</span>: <span className="text-green-300">"{project.desc}"</span>,</div>
                  <div><span className="text-blue-300">technologies</span>: [<span className="text-green-300">{project.tech.map(t => `"${t}"`).join(', ')}</span>],</div>
                  <div><span className="text-blue-300">status</span>: <span className="text-green-300">"{project.status}"</span>,</div>
                  <div><span className="text-blue-300">github</span>: <span className="text-green-300">"github.com/yourname/{project.name.toLowerCase().replace(/\s+/g, '-')}"</span></div>
                </div>
                <div className="text-white">{'}'}{idx < 3 ? ',' : ''}</div>
              </div>
            ))}
            <div className="text-white">];</div>

            <div className="mt-6">
              <span className="text-gray-500">// Get featured projects</span>
            </div>
            <div className="mt-2">
              <span className="text-purple-400">const</span>
              <span className="text-blue-300"> featured</span>
              <span className="text-white"> = projects.</span>
              <span className="text-yellow-300">filter</span>
              <span className="text-white">(p {'=>'} p.status === </span>
              <span className="text-green-300">"Completed"</span>
              <span className="text-white">);</span>
            </div>

            <div className="mt-4">
              <span className="text-purple-400">export</span>
              <span className="text-white"> {'{ projects, featured }'};</span>
            </div>
          </div>
        );
      case 'contact.md':
        return (
          <div className="font-mono text-sm space-y-6">
            <div>
              <div className="text-blue-400 text-2xl mb-4"># Get In Touch</div>
              <div className="text-gray-300 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </div>
            </div>

            <div className="mt-6">
              <div className="text-blue-400 text-xl mb-3">## Contact Information</div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span className="text-blue-300">Email:</span>
                  <span className="text-green-300">your.email@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-green-400" />
                  <span className="text-blue-300">GitHub:</span>
                  <span className="text-green-300">github.com/yourusername</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-green-400" />
                  <span className="text-blue-300">LinkedIn:</span>
                  <span className="text-green-300">linkedin.com/in/yourprofile</span>
                </div>
                <div className="flex items-center gap-2">
                  <Twitter className="w-4 h-4 text-green-400" />
                  <span className="text-blue-300">Twitter:</span>
                  <span className="text-green-300">@yourhandle</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-blue-400 text-xl mb-3">## Let's Build Something Together</div>
              <div className="text-gray-300 space-y-2">
                <div>✨ Open to freelance projects</div>
                <div>💼 Available for full-time opportunities</div>
                <div>🤝 Interested in collaborations</div>
                <div>☕ Always up for a coffee chat about tech</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 border-l-4 border-yellow-500">
              <div className="text-yellow-300 font-bold mb-2">💡 Fun Fact</div>
              <div className="text-gray-300">I debug with console.log() and I'm not ashamed to admit it! 😄</div>
            </div>

            <div className="mt-6 p-4 bg-blue-900/30 border border-blue-500 rounded">
              <div className="text-blue-300 mb-2">```javascript</div>
              <div className="ml-4 text-gray-300">
                <div>const response_time = "24 hours";</div>
                <div>const coffee_level = "always full ☕";</div>
                <div>const availability = "ready to start";</div>
              </div>
              <div className="text-blue-300">```</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-gray-300 flex flex-col">
      {/* Top Bar */}
      <div className="h-12 bg-[#323233] flex items-center px-4 border-b border-[#1e1e1e]">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-400" />
          <span className="text-gray-200 font-semibold">Portfolio - VS Code</span>
        </div>
        <div className="ml-auto flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-[#1e1e1e] flex flex-col">
          <div className="p-3 text-gray-400 text-xs uppercase tracking-wider border-b border-[#1e1e1e]">
            Explorer
          </div>
          <div className="flex-1 overflow-auto">
            <div className="p-2">
              <div 
                className="flex items-center gap-1 hover:bg-[#2a2d2e] p-1 rounded cursor-pointer"
                onClick={() => toggleFolder('src')}
              >
                {expandedFolders.includes('src') ? 
                  <ChevronDown className="w-4 h-4" /> : 
                  <ChevronRight className="w-4 h-4" />
                }
                <Folder className="w-4 h-4 text-blue-400" />
                <span className="text-sm">src</span>
              </div>
              {expandedFolders.includes('src') && (
                <div className="ml-6 mt-1 space-y-1">
                  {fileStructure.src.map(file => (
                    <div
                      key={file}
                      className={`flex items-center gap-2 p-1 rounded cursor-pointer hover:bg-[#2a2d2e] ${
                        activeTab === file ? 'bg-[#37373d]' : ''
                      }`}
                      onClick={() => setActiveTab(file)}
                    >
                      <FileCode className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{file}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="h-10 bg-[#252526] border-b border-[#1e1e1e] flex items-center overflow-x-auto">
            {tabs.map(tab => (
              <div
                key={tab.name}
                className={`h-full px-4 flex items-center gap-2 cursor-pointer border-r border-[#1e1e1e] ${
                  activeTab === tab.name 
                    ? 'bg-[#1e1e1e] text-white' 
                    : 'hover:bg-[#2a2d2e]'
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm whitespace-nowrap">{tab.name}</span>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-6">
            {renderContent()}
          </div>

          {/* Status Bar */}
          <div className="h-6 bg-[#007acc] flex items-center px-4 text-xs text-white">
            <div className="flex items-center gap-4">
              <span>UTF-8</span>
              <span>JavaScript</span>
              <span>Ln 1, Col 1</span>
            </div>
            <div className="ml-auto">
              <span>Designed with ❤️ using React</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;