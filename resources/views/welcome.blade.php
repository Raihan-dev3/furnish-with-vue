<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        @vite(['resources/css/bootstrap.min.css', 'resources/css/style.css', 'resources/css/responsive.css'])
    </head>
    <body>
        
        <div id="app"></div>
        @vite('resources/js/app.js')
    </body>
</html>
