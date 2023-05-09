
import { execa } from 'execa';

(async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'gh-pages']);
    await execa('pnpm', ['run', 'docs:build']);
    await execa('git', ['--work-tree', 'docs/.vitepress/dist', 'add', '--all']);
    await execa('git', ['--work-tree', 'docs/.vitepress/dist', 'commit', '-m', 'gh-pages deployment']);
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force']);
    await execa('rm', ['-r', 'docs/.vitepress/dist']);
    await execa('git', ['checkout', '-f', 'main']);
    await execa('git', ['branch', '-D', 'gh-pages']);
  } catch (e) {
    process.exit(1);
  }
})();
