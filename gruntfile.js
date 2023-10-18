module.exports = function(grunt) {
    grunt.initConfig({
        //Configuração do modulo de automação na compilação do less de desemvolvimento
        watch: {
            less: {
                files: ['src/styles/*.less'],
                tasks: ['less:development']
            }
        },
        //Configuração do modulo de compilação do LESS para CSS, ambiente de desenvolvimento e produção
        less: {
            development: {
                files: {
                    'dev/styles/main.css':'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css':'src/styles/main.less'
                }
            }
        },
        //Configuração do modulo de compressão do arquivo HTML, adicionada a remoção de comentários
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html':'src/index.html'
                }
            }
        },
        //Configuração do modulo de compactação do arquivo JavaScript
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        },
        //Configuração do modulo de edição do arquivo HTML para adicionar os caminhos do CSS e JS automaticamente nos campos corretos 
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        //Configuração do modulo para deletar a pasta 'prebuild' criada no modulo htmlmin
        clean: ['prebuild'],

    })

    //Fazer o carregamento dos plugins do grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Execução default do comando grunt; este executa o modulo watch para verificar alterções no arquivo src/styles/main.less e compilar o CSS, este comando é usado na hora do desemvolvimento somente 
    grunt.registerTask('default', ['watch']);
    
    //Execução do grunt em produção para distribuição da pagina ao usuário final.
    grunt.registerTask('production', ['less:production', 'htmlmin:dist','uglify', 'replace:dist', 'clean']);

}