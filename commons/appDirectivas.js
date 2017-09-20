angular.module("commonModule")
.directive('appPie', function(){
    return {
        template : 
        `
        <footer>
            <p> {{autor}}. Curso AngularJS. Badajoz 2017.</p>
        </footer>
        `,
        restrict : 'AE',
        scope: {
             autor:    '@autor'
        }
        
    }
} )

