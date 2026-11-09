FROM ghcr.io/ruby/ruby:3.3 AS build

# Add Gem build requirements
RUN apt-get update && apt-get install -y \
  g++ \
  make \
  libssl-dev \
  && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /app

# Add Gemfile and Gemfile.lock
ADD Gemfile* /app/

# Install Gems
RUN gem install bundler -v 4.0.24 \
    && bundle config set build.nokogiri --use-system-libraries \
    && bundle config set --globaljobs $(nproc) \
    && bundle install

# Copy Site Files
COPY . .

# Run jekyll serve
CMD ["bundle","exec","jekyll","serve","--host=0.0.0.0","-wl"]
