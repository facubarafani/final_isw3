module.exports = {
    verbose: true,
    setupFiles: ["dotenv/config"],
    collectCoverage: true,
    coverageReporters: ["json", "html"],
    reporters: [
        'default',
        ['jest-junit', {outputDirectory: 'reports', outputName: 'report.xml'}],
      ],
}