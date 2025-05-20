import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-orbitron font-bold neon-text-blue">Ganesh Sriramulu</h3>
            <p className="text-gray-400 mt-1">Full Stack Developer | Cloud Enthusiast | ML Explorer</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/Ganesh-73005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://in.linkedin.com/in/ganesh-s-60ba63339?trk=people-guest_people_search-card"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:ganeshsriramulu2@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ganesh Sriramulu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
