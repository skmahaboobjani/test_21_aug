function fn() {
    return 'Hello';
}


function name(user, func)
{


    const message = func();

    console.log(`${message} ${user}`);
}

name('maha', fn);
name('boob', fn);
name('jani', fn);