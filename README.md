# PackagingTool
Simple webpack demo

Follow this steps to install required packages using npm:

1- adding webapck to an app: npm install webpack webpack-cli webpack-dev-server -D

2- loaders: npm i -D html-loader style-loader css-loader sass-loader sass file-loader 

3- plugins: npm i -D html-webpack-plugin clean-webpack-plugin MiniCssExtractPlugin CssMinimizerPlugin

4- plugins for img minify: npm i -D imagemin-mozjpeg imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo image-minimizer-webpack-plugin

5- npm init -y 

6- edit package.json add these 2-line to scripts:  "start":"webpack serve",
		                                               "build":"set NODE_ENV='production' && webpack"
							       
7- Now to run your demo write: npm start and to run as production: npm run build
 
