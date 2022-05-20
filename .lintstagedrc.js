module.exports = {
  '*.ts': [
    'prettier --write',
    'yarn eslint --fix',
    'jest --bail --findRelatedTests',
  ],
  '!.ts': ['prettier --write'],
};
