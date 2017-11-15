# yo-lib

Example of reusable angular components library.

## Explanation

Repo should be used as a template for creating of your own library with reusable
Angular 5 components, services, pipes, etc.

## Library development

Clone this repository on your local machine. Also, it would be better
if you have @angular/cli installed globally.

```
git clone git@github.com:Tamango92/yo-lib.git
cd yo-lib/source
```

**IMPORTANT NOTE**: **There is no sense in installing and using library with name 'yo-lib' in your angular 5 project, because it
will bring just a bundled package with two test/demo components. You may do that for testing
purposes if you want (examples provided in the 'using in project' section).
So I recommend to rename library and reset version in `package.json` just after you have cloned this repository**

Ok, now you are in the library source directory, which actually is a simple but a bit tricky Angular app.

```
npm install
```

### Get in touch with existing components (aka preview/development mode)

Make sure that you are in the `source` folder. Simply serve the preview app.

```
npm run serve
```

Or, I would *recommend* to run it **w**ith the basic **d**ocs using this command:

```
npm run serve:wd
```

Now the preview app is running at your [localhost:4444](http://localhost:4444)
By the way, generated docs will appear in `documentation` folder (gitignored by default).

![alt text](https://imgur.com/download/rvIz8He)

### Creating new component

FYI: this section should be automated in the nearest future.
Please be careful and patient, generate new components and their previews using same syntax as in example.
Also, all commands below should be executed from the `source` directory.

Imagine, that we need to create `yo-user` component. ('yo' prefix is just for example. Use your own prefix.)
Let's start from creating a separate module:
```
ng g m yo-user
```
It means "**g**enerate **m**odule yo-user". New module will be created in `src/app/yo-user` directory/

Now generate our component in the same place and in the same way:

```
ng g c yo-user
```

And now lets generate a preview for our new component (which will be available in the
preview app soon):
```
ng g c previews/yo-user-preview
```

 **NOTE**: I am using consistent namings for components and module. It starts from 'yo-''
 then I place name ('user'). For preview component I am using same construction but
 with the 'previews/' in the beginning and the '-preview' postfix.

Now let's add few final changes to make our component ready for using in the preview
and external apps.

In the `yo-user.module` file add 'exports' line with our component:

```
...
declarations: [YoUserComponent],
exports: [YoUserComponent]         //add this
```
Now in the source directory find `public_api.ts` file (it lists what is exported by our lib). Add line below others and
export module.

```
export * from './src/app/yo-user/yo-user.module';
```
After library rebuild our component will be available for using in external apps. But let's add its own route in our
preview app. Go to `src/app/app.routes` file and add a route for our YoUserPreviewComponent:

```
{
    path: 'yo-user',
    component: YoUserPreviewComponent
}
```
And the last step, add it to the componentsList in app.component to create new link in preview app.

```
componentsList: [... , 'yo-user'];
```
After that place your 'yo-user' component into 'yo-user-preview' component template.
(Look at yo-test and yo-loader examples in previews folder)
That is all. Now you can easily start to develop your component and check it in preview component.

## Deployment

Increment version in package.json (in the 'source' directory) and simply run:

```
npm run build:lib
```

And then:

```
npm publish ../lib
```
NOTE: Commands are executed from `./source` directory.

### Using in project

Installing is simple. First of all switch into root directory of your angular 5 project.


```
cd my-angular-project
```

And now install your library using :

```
npm install --save yo-lib  // or YOUR YOUR PUBLISHED LIBRARY NAME
```

Simply import necessary modules into your app.module. After that you can use a component
(or even few) which is exported byt that module.
Feel free to use YoTestModule for testing if library is installed correctly (ofc, if you
have not removed it before publishing your library):

```
//your app.module.ts
 import YoTestModule from { yo-lib }
 ......

 imports: [
    YoTestModule,
    ...
 ]
```

After that, place this line into any template of your project:

```
<yo-test [interval]="1000">Yo library!</yo-test>
```

Then, if you see green rectangle with blinking text - everything is OK.

## Local development.

### Changing or fixing existing components with immediate (almost) changes applying in particular app.

Step one. In Angular app change library import name to `lib` directory of local `yo-lib` project.
For example:

```
import { YoTestModule } from '../../../yo-lib/lib';   // before it was 'yo-lib'
```

Step two. Extend 'compilerOptions' field of `tsconfig.json` in root of your angular app. (It is necessary for local development).

```
"baseUrl": "./",
"paths": {
  "@angular/*": [
    "./node_modules/@angular/*"
  ]
},
```

Step three. Back to library source and make necessary changes. Then just rebuild lib (about 7-10 secs). Refreshed library
will be put into `../lib` directory, so all running apps which are linked to the lib will get changes immediately.

```
npm run build:lib
```

If you prefer to use *watch mode* (aka live-reload), then instead of manual rebuilding run shown below command before
starting work. This mode is experimental.

```
npm run build:lib:watch
```
**NOTE**: Commands should be run from the `./source` directory!

## Built With

* [ng-packagr](https://github.com/dherges/ng-packagr) - Young but cool tool for packaging Angular libraries
* [Compodoc](https://github.com/compodoc/compodoc) - Documentation tool for Angular app.

## Author

Artem Arkhipov

## Tips

* If you experience troubles with third-party dependencies in you library:
    - [info](https://github.com/dherges/ng-packagr/issues/129) - Base info from ng-packagr team

