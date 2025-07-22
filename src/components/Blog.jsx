import React, { useState } from 'react';
import { Calendar, User, Mail } from 'lucide-react';
import { blogPosts } from '../mockData/mockData';
import Navbar from './Navbar';
import '../styles/blog.css';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen">
        <Navbar/>
      {/* Hero Section */}
      <section className="blog-hero-section">
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-container">
          <h1 className="blog-hero-title">
            Hydration <span className="blog-hero-highlight">Insights</span>
          </h1>
          <p className="blog-hero-description">
            Discover the latest research, tips, and insights about hydration, health, and wellness. 
            Stay informed and stay healthy with our expert-curated content.
          </p>
        </div>
        
        {/* Background Pattern */}
        <div className="blog-hero-pattern">
          <div className="blog-hero-circle blog-hero-circle-1"></div>
          <div className="blog-hero-circle blog-hero-circle-2"></div>
          <div className="blog-hero-circle blog-hero-circle-3"></div>
          <div className="blog-hero-circle blog-hero-circle-4"></div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-posts-section">
        <div className="blog-posts-container">
          <div className="blog-posts-header">
            <h2 className="blog-posts-title">
              Latest Articles
            </h2>
            <p className="blog-posts-description">
              Expert insights and practical tips for better hydration
            </p>
          </div>

          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="blog-post-image-container">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-post-image"
                  />
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-meta">
                    <div className="blog-post-meta-item">
                      <User className="blog-post-meta-icon" />
                      <span>{post.author}</span>
                    </div>
                    <div className="blog-post-meta-item">
                      <Calendar className="blog-post-meta-icon" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <h3 className="blog-post-title">
                    {post.title}
                  </h3>
                  <p className="blog-post-description">
                    {post.description}
                  </p>
                  <a href="#" className="blog-post-read-more">
                    <span>Read More</span>
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="blog-load-more">
            <button className="blog-load-more-button">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="featured-content-section">
        <div className="featured-content-container">
          <div className="featured-content-card">
            <div className="featured-content-grid">
              <div className="featured-content-text">
                <h2 className="featured-content-title">
                  Health Tips Delivered Weekly
                </h2>
                <p className="featured-content-description">
                  Get personalized hydration tips, the latest research insights, and exclusive 
                  content delivered straight to your inbox. Join our community of health-conscious individuals.
                </p>
                <ul className="featured-content-list">
                  <li className="featured-content-list-item">
                    <span className="featured-content-list-dot"></span>
                    <span>Weekly hydration tips and research</span>
                  </li>
                  <li className="featured-content-list-item">
                    <span className="featured-content-list-dot"></span>
                    <span>Exclusive access to new features</span>
                  </li>
                  <li className="featured-content-list-item">
                    <span className="featured-content-list-dot"></span>
                    <span>No spam, unsubscribe anytime</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Newsletter"
                  className="featured-content-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2 className="newsletter-title">
            Stay Updated
          </h2>
          <p className="newsletter-description">
            Subscribe to our newsletter for the latest hydration insights and health tips
          </p>

          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <div className="newsletter-form-content">
              <div className="newsletter-input-container">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="newsletter-input"
                />
              </div>
              <button
                type="submit"
                className="newsletter-submit"
              >
                <Mail className="newsletter-submit-icon" />
                <span>Subscribe</span>
              </button>
            </div>
          </form>

          {isSubscribed && (
            <div className="newsletter-success">
              <p className="newsletter-success-text">
                Thank you for subscribing! Check your email for confirmation.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;