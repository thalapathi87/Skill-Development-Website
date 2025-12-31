// import React from 'react';
// import { Github, Linkedin, Mail, Heart } from 'lucide-react';

// const Footer = () => {
//   const socialLinks = [
//     { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
//     { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
//     { icon: Mail, href: 'mailto:thalapathiofficial8@gmail.com', label: 'Email' }
//   ];

//   return (
//     <footer className="bg-slate-900 border-t border-slate-800">
//       <div className="max-w-6xl mx-auto px-6 py-8">
        
//         {/* Main Content */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          
//           {/* Brand */}
//           <div className="text-center md:text-left">
//             <h2 className="text-white font-bold text-xl tracking-tight">
//               MASTER <span className="text-indigo-500">JS</span>
//             </h2>
//             <p className="text-slate-400 text-xs mt-1">Built with precision and passion</p>
//           </div>

//           {/* Social Links */}
//           <div className="flex gap-4">
//             {socialLinks.map((social, index) => {
//               const Icon = social.icon;
//               return (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2.5 bg-slate-800/50 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300 hover:scale-110"
//                   aria-label={social.label}
//                 >
//                   <Icon size={20} />
//                 </a>
//               );
//             })}
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-slate-800 mb-6"></div>

//         {/* Copyright */}
//         <div className="text-center">
//           <p className="text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
//             <span className="whitespace-nowrap">© 2024 MasterJS.</span>
//             <span className="flex items-center gap-1.5 whitespace-nowrap">
//               Made with 
//               <Heart size={14} className="text-rose-500 fill-current animate-pulse" /> 
//               by
//               <span className="font-semibold text-white">THALAPATHI</span>
//             </span>
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;