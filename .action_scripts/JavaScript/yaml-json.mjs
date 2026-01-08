import { readFileSync, writeFileSync } from 'fs';
import { resolve, extname } from 'path';
import { dump, load } from 'js-yaml';

// 获取命令行参数
const filePath = process.argv[2];

if (!filePath) {
  console.error("[ERROR] 请提供文件路径作为参数。");
  process.exit(1);
}

// 解析文件路径
const fullPath = resolve(filePath);
const ext = extname(fullPath).toLowerCase();

// 检查文件扩展名
if (ext !== '.json' && ext !== '.yaml' && ext !== '.yml') {
  console.error("[ERROR] 不支持的文件格式。请提供 .json 或 .yaml/.yml 文件。");
  process.exit(1);
}

try {
  // 读取文件内容
  const fileContent = readFileSync(fullPath, 'utf8');

  let outputContent, outputPath;

  if (ext === '.json') {
    // JSON 转 YAML
    const jsonData = JSON.parse(fileContent);
    outputContent = dump(jsonData);
    outputPath = fullPath.replace(/\.json$/, '.yaml');
  } else {
    // YAML 转 JSON
    const yamlData = load(fileContent);
    outputContent = JSON.stringify(yamlData, null, 2);
    outputPath = fullPath.replace(/\.yaml$|\.yml$/, '.json');
  }

  // 写入转换后的文件
  writeFileSync(outputPath, outputContent, 'utf8');
  console.log(`文件已成功转换并保存到 ${outputPath}`);
} catch (error) {
  console.error(`[ERROR] 转换过程中发生错误: ${error}`);
  process.exit(1);
}
