module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  
  grunt.initConfig({
    babel: {
      options : {
        sourceMap: false,
        "presets": ["react"]
      },
      dist : {
        files : [{
          expand: true,
          src : ['develop/react_view/*.js'],
          dest : 'test/src/'
        }]
      }
    }
  });
  //server/static/js/view/
  grunt.registerTask('default', ['babel']);
}

//babel --presets react develop/react_view/ --watch --out-dir server/static/js/view/

/*
concat: {
  dev: {
    src: ['develop/react_view/*.js'],
    dest: 'test/application.js'
  }
}
// 파일 전부 합치는 모듈
// 수정 할 필요가 있음, 원본파일도 변경시켜버림
*/