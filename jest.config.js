module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '\\.(ts|tsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
