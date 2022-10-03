use Rack::Static,
  :urls => ["/images", "/js", "/css"],
  :root => "public"

map "/" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/index.html', File::RDONLY)
    ]
  }
end

map "/would-you-rather" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/would-you-rather.html', File::RDONLY)
    ]
  }
end

map "/my-reads" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/myreads.html', File::RDONLY)
    ]
  }
end

map "/may-4th-flyer" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type' => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/may-4th-flyer.html', File::RDONLY)
    ]
  }
end

map "/midsummer-night-flyer" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type' => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/midsummer-night-flyer.html', File::RDONLY)
    ]
  }
end

map "/oh-my-goth-flyer" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type' => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/oh-my-goth-flyer.html', File::RDONLY)
    ]
  }
end

map "/gothic-industrial-madness-flyer" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type' => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/gothic-industrial-madness-flyer.html')
    ]
  }
end

map "/sp-birthday-flyer" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type' => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/sp-birthday-flyer.html')
    ]
  }
end

map "/goth-night-before-christmas-flyer" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type' => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/goth-night-before-christmas-flyer.html')
    ]
  }
end

map "/back-to-80s-flyer" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type' => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/back-to-80s-flyer.html')
    ]
  }
end

map "/track-and-rally-logo" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type' => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/track-and-rally-logo.html')
    ]
  }
end

map "/goth-industrial-night-flyer" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type' => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/goth-industrial-night-flyer.html')
    ]
  }
end

map "/biohazard-flyer" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type' => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/biohazard-flyer.html')
    ]
  }
end

map "/bmtmicro-logo" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type' => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/bmtmicro-logo.html')
    ]
  }
end
