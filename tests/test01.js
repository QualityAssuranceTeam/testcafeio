import { Selector } from 'testcafe'; // import testcafe selectors

fixture `Getting Started`// declare test suite
    .page `https://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .typeText('#developer-name', 'John Smith')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});

test('My second test', async t => {
    await t
        .typeText('#developer-name', 'Yuksel Ahmedov')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, Yuksel Ahmedov!');
});

test('My third test', async t=> {
    await t
        .typeText('#developer-name', 'Test Test')
        .click('#remote-testing')
        .click('#reusing-js-code')
        .click('#background-parallel-testing')
        .click('#continuous-integration-embedding')
        .click('#traffic-markup-analysis')
        .click('#tried-test-cafe')
        .click('#linux')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText).eql('Thank you, Test Test!');
});
