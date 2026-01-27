import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',     
      assets: 'build',    
      fallback: null
    }),
 
    paths: {
      base: ''
    }
  }
};

export default config;

