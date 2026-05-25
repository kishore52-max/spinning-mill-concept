import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-sm';
  const variants = {
    primary:
    'bg-navy text-off-white hover:bg-navy-light hover:shadow-lg hover:-translate-y-0.5',
    secondary:
    'bg-beige text-navy hover:bg-beige-dark hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border border-navy text-navy hover:bg-navy hover:text-off-white',
    ghost:
    'border border-off-white/30 text-off-white hover:bg-off-white hover:text-navy backdrop-blur-sm'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  const content =
  <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>;

  if (href) {
    return (
      <Link to={href} className={combinedClassName}>
        {content}
      </Link>);

  }
  return (
    <motion.button
      whileTap={{
        scale: 0.98
      }}
      className={combinedClassName}
      {...props}>
      
      {content}
    </motion.button>);

}