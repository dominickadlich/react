const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
    let output: React.ReactElement[] = [];

    poem.lines.forEach((line, i) => {
        output.push(
            <hr key={i + '-seperator'} />
        );
        output.push(
            <p key={i + '-text'}>
                {line}
            </p>
        );
    });
    output.shift();

  return (
    <article>
        {output}
    </article>
  );
}
