import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
          </Link>
          <Link href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
          </Link>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 